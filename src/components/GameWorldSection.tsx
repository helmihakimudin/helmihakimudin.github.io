import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Flag,
  Gamepad2,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import type {Language, ProjectItem, SectionId, Theme} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';
import {soundFx} from '../utils/soundFx';

interface GameWorldSectionProps {
  lang: Language;
  theme: Theme;
  onSelectProject: (project: ProjectItem) => void;
  onNavigateSection: (id: SectionId) => void;
}

interface Platform {
  x: number;
  y: number;
  w: number;
  h: number;
  kind: 'brick' | 'pipe' | 'step';
}

interface CoinItem {
  id: string;
  label: string;
  x: number;
  y: number;
  collected: boolean;
}

interface MysteryBlock {
  id: string;
  projectIndex: number;
  x: number;
  y: number;
  w: number;
  h: number;
  hit: boolean;
  bounceY: number;
}

interface CheckpointFlag {
  id: string;
  timelineIndex: number;
  x: number;
  y: number;
  reached: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

const WORLD_WIDTH = 3120;
const VIEW_HEIGHT = 340;
const GROUND_Y = 282;
const PLAYER_W = 28;
const PLAYER_H = 38;
const GRAVITY = 1580;
const JUMP_VEL = -575;
const MOVE_SPEED = 275;
const FLAGPOLE_X = 2860;

const STAGE_WARP_X: Record<SectionId, number> = {
  home: 80,
  projects: 745,
  experience: 1710,
  connect: 2580,
};

function createInitialPlatforms(): Platform[] {
  return [
    // Stage 1-1 Profile intro steps
    {x: 310, y: 214, w: 120, h: 22, kind: 'brick'},
    {x: 490, y: 170, w: 96, h: 22, kind: 'brick'},
    // Pipe separator into Projects
    {x: 660, y: 234, w: 52, h: 48, kind: 'pipe'},

    // Stage 1-2 Projects platforms
    {x: 820, y: 214, w: 130, h: 22, kind: 'brick'},
    {x: 1050, y: 200, w: 130, h: 22, kind: 'brick'},
    {x: 1280, y: 214, w: 130, h: 22, kind: 'brick'},
    {x: 1500, y: 185, w: 110, h: 22, kind: 'brick'},
    // Pipe separator into Career
    {x: 1640, y: 224, w: 54, h: 58, kind: 'pipe'},

    // Stage 1-3 Career elevated walkways
    {x: 1840, y: 220, w: 120, h: 22, kind: 'brick'},
    {x: 2080, y: 192, w: 130, h: 22, kind: 'brick'},
    {x: 2340, y: 220, w: 120, h: 22, kind: 'brick'},

    // Stage 1-4 Goal staircase leading to Flagpole
    {x: 2640, y: 254, w: 40, h: 28, kind: 'step'},
    {x: 2680, y: 226, w: 40, h: 56, kind: 'step'},
    {x: 2720, y: 198, w: 40, h: 84, kind: 'step'},
    {x: 2760, y: 170, w: 46, h: 112, kind: 'step'},
  ];
}

function createInitialCoins(): CoinItem[] {
  return [
    {id: 'php', label: 'PHP', x: 350, y: 174, collected: false},
    {id: 'laravel', label: 'LRVL', x: 522, y: 130, collected: false},
    {id: 'js', label: 'JS', x: 965, y: 240, collected: false},
    {id: 'react', label: 'REACT', x: 1195, y: 240, collected: false},
    {id: 'node', label: 'NODE', x: 1890, y: 180, collected: false},
    {id: 'mysql', label: 'MYSQL', x: 2135, y: 152, collected: false},
    {id: 'sqlsrv', label: 'MSSQL', x: 2390, y: 180, collected: false},
    {id: 'ws', label: 'WS', x: 2690, y: 186, collected: false},
  ];
}

function createInitialBlocks(): MysteryBlock[] {
  return [
    {id: 'b0', projectIndex: 0, x: 865, y: 134, w: 40, h: 40, hit: false, bounceY: 0},
    {id: 'b1', projectIndex: 1, x: 1095, y: 120, w: 40, h: 40, hit: false, bounceY: 0},
    {id: 'b2', projectIndex: 2, x: 1325, y: 134, w: 40, h: 40, hit: false, bounceY: 0},
    {id: 'b3', projectIndex: 3, x: 1535, y: 105, w: 40, h: 40, hit: false, bounceY: 0},
  ];
}

function createInitialCheckpoints(): CheckpointFlag[] {
  return [
    {id: 'cp-edu', timelineIndex: 6, x: 1750, y: GROUND_Y, reached: false},
    {id: 'cp-shapirre', timelineIndex: 3, x: 1995, y: GROUND_Y, reached: false},
    {id: 'cp-apiduasisi', timelineIndex: 2, x: 2255, y: GROUND_Y, reached: false},
    {id: 'cp-sumbermas', timelineIndex: 0, x: 2500, y: GROUND_Y, reached: false},
  ];
}

export function GameWorldSection({
  lang,
  theme,
  onSelectProject,
  onNavigateSection,
}: GameWorldSectionProps) {
  const {projects, timeline, ui, profile} = PORTFOLIO_DATA;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const [stageClear, setStageClear] = useState(false);
  const [currentStageCode, setCurrentStageCode] = useState('1-1');
  const [coinsCount, setCoinsCount] = useState(0);
  const [blocksCount, setBlocksCount] = useState(0);
  const [lastUnlockedProject, setLastUnlockedProject] = useState<ProjectItem | null>(null);
  const [lastCheckpointIdx, setLastCheckpointIdx] = useState<number | null>(null);

  // Mutable simulation state inside ref for smooth 60fps loop
  const simRef = useRef({
    player: {
      x: 80,
      y: GROUND_Y - PLAYER_H,
      vx: 0,
      vy: 0,
      onGround: true,
      dir: 1 as 1 | -1,
      walkPhase: 0,
    },
    cameraX: 0,
    keys: {
      left: false,
      right: false,
      jump: false,
    },
    platforms: createInitialPlatforms(),
    coins: createInitialCoins(),
    blocks: createInitialBlocks(),
    checkpoints: createInitialCheckpoints(),
    particles: [] as Particle[],
    flagSlide: 0,
    cleared: false,
  });

  const totalCoins = useMemo(() => createInitialCoins().length, []);
  const totalBlocks = useMemo(() => createInitialBlocks().length, []);

  const spawnParticles = useCallback((x: number, y: number, color: string, count = 10) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const speed = 70 + Math.random() * 140;
      simRef.current.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 80,
        life: 0.45 + Math.random() * 0.25,
        color,
      });
    }
  }, []);

  const triggerBlockDiscovery = useCallback(
    (block: MysteryBlock) => {
      if (!block.hit) {
        block.hit = true;
        setBlocksCount((prev) => prev + 1);
      }
      block.bounceY = -10;
      soundFx.playBlockHit();
      spawnParticles(block.x + block.w / 2, block.y, '#F59E0B', 14);
      const proj = projects[block.projectIndex];
      if (proj) {
        setLastUnlockedProject(proj);
        setLastCheckpointIdx(null);
      }
    },
    [projects, spawnParticles],
  );

  const resetWorld = useCallback(() => {
    simRef.current = {
      player: {
        x: 80,
        y: GROUND_Y - PLAYER_H,
        vx: 0,
        vy: 0,
        onGround: true,
        dir: 1,
        walkPhase: 0,
      },
      cameraX: 0,
      keys: {left: false, right: false, jump: false},
      platforms: createInitialPlatforms(),
      coins: createInitialCoins(),
      blocks: createInitialBlocks(),
      checkpoints: createInitialCheckpoints(),
      particles: [],
      flagSlide: 0,
      cleared: false,
    };
    setCoinsCount(0);
    setBlocksCount(0);
    setStageClear(false);
    setCurrentStageCode('1-1');
    setLastUnlockedProject(null);
    setLastCheckpointIdx(null);
    setStarted(true);
  }, []);

  const warpToStage = useCallback((sectionId: SectionId) => {
    setStarted(true);
    const targetX = STAGE_WARP_X[sectionId] ?? 80;
    const sim = simRef.current;
    sim.player.x = targetX;
    sim.player.y = GROUND_Y - PLAYER_H;
    sim.player.vx = 0;
    sim.player.vy = 0;
    sim.player.onGround = true;
    soundFx.playJump();
  }, []);

  const toggleSound = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      soundFx.muted = next;
      return next;
    });
  }, []);

  // Keyboard bindings scoped cleanly when container is focused or game started
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!started) return;
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

      const sim = simRef.current;
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        sim.keys.left = true;
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        sim.keys.right = true;
      } else if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') {
        if (document.activeElement === containerRef.current || e.code !== 'Space') {
          if (e.code === 'ArrowUp' || e.code === 'Space') {
            e.preventDefault();
          }
        }
        if (sim.player.onGround && !sim.keys.jump) {
          sim.player.vy = JUMP_VEL;
          sim.player.onGround = false;
          soundFx.playJump();
        }
        sim.keys.jump = true;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const sim = simRef.current;
      if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        sim.keys.left = false;
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        sim.keys.right = false;
      } else if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Space') {
        sim.keys.jump = false;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [started]);

  // Main 60fps Canvas loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let lastTime = performance.now();

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cssWidth = parent.clientWidth;
      canvas.width = Math.floor(cssWidth * dpr);
      canvas.height = Math.floor(VIEW_HEIGHT * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const step = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.04);
      lastTime = now;

      const sim = simRef.current;
      const viewW = canvas.parentElement?.clientWidth || 960;
      const p = sim.player;

      // Horizontal movement
      if (sim.keys.left && !sim.keys.right) {
        p.vx = -MOVE_SPEED;
        p.dir = -1;
      } else if (sim.keys.right && !sim.keys.left) {
        p.vx = MOVE_SPEED;
        p.dir = 1;
      } else {
        p.vx *= 0.72;
        if (Math.abs(p.vx) < 8) p.vx = 0;
      }

      if (Math.abs(p.vx) > 20 && p.onGround) {
        p.walkPhase += dt * 12;
      } else {
        p.walkPhase = 0;
      }

      // Apply X + world bounds
      p.x += p.vx * dt;
      if (p.x < 12) p.x = 12;
      if (p.x > WORLD_WIDTH - PLAYER_W - 20) p.x = WORLD_WIDTH - PLAYER_W - 20;

      // Horizontal collisions with solid platforms/pipes
      for (const plat of sim.platforms) {
        if (
          p.x < plat.x + plat.w &&
          p.x + PLAYER_W > plat.x &&
          p.y < plat.y + plat.h &&
          p.y + PLAYER_H > plat.y
        ) {
          if (p.vx > 0) p.x = plat.x - PLAYER_W;
          else if (p.vx < 0) p.x = plat.x + plat.w;
          p.vx = 0;
        }
      }

      // Gravity + Vertical movement
      p.vy += GRAVITY * dt;
      p.y += p.vy * dt;
      p.onGround = false;

      // Ground collision
      if (p.y + PLAYER_H >= GROUND_Y) {
        p.y = GROUND_Y - PLAYER_H;
        p.vy = 0;
        p.onGround = true;
      }

      // Platform vertical collision
      for (const plat of sim.platforms) {
        if (
          p.x < plat.x + plat.w &&
          p.x + PLAYER_W > plat.x &&
          p.y < plat.y + plat.h &&
          p.y + PLAYER_H > plat.y
        ) {
          if (p.vy >= 0) {
            p.y = plat.y - PLAYER_H;
            p.vy = 0;
            p.onGround = true;
          } else if (p.vy < 0) {
            p.y = plat.y + plat.h;
            p.vy = 0;
          }
        }
      }

      // Mystery block collisions (hit from below OR stand on top)
      for (const block of sim.blocks) {
        if (block.bounceY < 0) {
          block.bounceY = Math.min(0, block.bounceY + dt * 55);
        }

        if (
          p.x < block.x + block.w &&
          p.x + PLAYER_W > block.x &&
          p.y < block.y + block.h &&
          p.y + PLAYER_H > block.y
        ) {
          if (p.vy < 0 && p.y + PLAYER_H * 0.4 > block.y) {
            p.y = block.y + block.h;
            p.vy = 80;
            triggerBlockDiscovery(block);
          } else if (p.vy >= 0 && p.y + PLAYER_H - p.vy * dt <= block.y + 8) {
            p.y = block.y - PLAYER_H;
            p.vy = 0;
            p.onGround = true;
          }
        }
      }

      // Coin collection
      for (const coin of sim.coins) {
        if (coin.collected) continue;
        const cx = coin.x + 13;
        const cy = coin.y + 13;
        const px = p.x + PLAYER_W / 2;
        const py = p.y + PLAYER_H / 2;
        if (Math.hypot(cx - px, cy - py) < 28) {
          coin.collected = true;
          soundFx.playCoin();
          setCoinsCount((prev) => prev + 1);
          spawnParticles(cx, cy, '#3B82F6', 8);
        }
      }

      // Career Checkpoints
      for (const cp of sim.checkpoints) {
        if (!cp.reached && p.x + PLAYER_W / 2 >= cp.x - 10) {
          cp.reached = true;
          soundFx.playCheckpoint();
          spawnParticles(cp.x, cp.y - 75, '#10B981', 10);
          setLastCheckpointIdx(cp.timelineIndex);
          setLastUnlockedProject(null);
        }
      }

      // Flagpole goal
      if (!sim.cleared && p.x + PLAYER_W >= FLAGPOLE_X - 8) {
        sim.cleared = true;
        setStageClear(true);
        soundFx.playStageClear();
        spawnParticles(FLAGPOLE_X, 110, '#F59E0B', 20);
      }

      if (sim.cleared && sim.flagSlide < 115) {
        sim.flagSlide = Math.min(115, sim.flagSlide + dt * 160);
      }

      // Update particles
      sim.particles = sim.particles.filter((pt) => {
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        pt.vy += 420 * dt;
        pt.life -= dt;
        return pt.life > 0;
      });

      // Stage indicator tracking
      let stageCode = '1-1';
      if (p.x >= 2560) stageCode = '1-4';
      else if (p.x >= 1640) stageCode = '1-3';
      else if (p.x >= 680) stageCode = '1-2';
      setCurrentStageCode((prev) => (prev !== stageCode ? stageCode : prev));

      // Smooth camera follow
      const targetCam = Math.max(0, Math.min(WORLD_WIDTH - viewW, p.x - viewW * 0.36));
      sim.cameraX += (targetCam - sim.cameraX) * Math.min(1, dt * 10);

      // ================= RENDERING =================
      const isDark = theme === 'dark';
      const palette = isDark
        ? {
            skyTop: '#090D18',
            skyBottom: '#161F38',
            cloud: 'rgba(148, 163, 184, 0.14)',
            hillFar: '#131B2E',
            hillNear: '#1C2640',
            groundTop: '#14B8A6',
            groundBody: '#0F172A',
            groundGrid: '#1E293B',
            brick: '#334155',
            brickBorder: '#475569',
            pipe: '#14B8A6',
            pipeDark: '#0D9488',
            step: '#475569',
            blockActive: '#FBBF24',
            blockHit: '#1E293B',
            blockText: '#0F172A',
            accent: '#818CF8',
            ink: '#F1F5F9',
            muted: '#94A3B8',
          }
        : {
            skyTop: '#EEF2FF',
            skyBottom: '#F8FAFC',
            cloud: 'rgba(255, 255, 255, 0.92)',
            hillFar: '#E2E8F0',
            hillNear: '#CBD5E1',
            groundTop: '#0D9488',
            groundBody: '#1E293B',
            groundGrid: '#334155',
            brick: '#475569',
            brickBorder: '#334155',
            pipe: '#0D9488',
            pipeDark: '#0F766E',
            step: '#334155',
            blockActive: '#F59E0B',
            blockHit: '#CBD5E1',
            blockText: '#0F172A',
            accent: '#4F46E5',
            ink: '#0F172A',
            muted: '#475569',
          };

      // Sky gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, GROUND_Y);
      skyGrad.addColorStop(0, palette.skyTop);
      skyGrad.addColorStop(1, palette.skyBottom);
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, viewW, VIEW_HEIGHT);

      // Stars in dark mode
      if (isDark) {
        ctx.fillStyle = 'rgba(224, 231, 255, 0.45)';
        for (let i = 0; i < 36; i++) {
          const sx = ((i * 197 - sim.cameraX * 0.15) % (viewW + 60) + viewW + 60) % (viewW + 60) - 30;
          const sy = 24 + ((i * 73) % 165);
          ctx.fillRect(sx, sy, i % 3 === 0 ? 2.5 : 1.5, i % 3 === 0 ? 2.5 : 1.5);
        }
      }

      // Parallax geometric hills / skyline
      ctx.fillStyle = palette.hillFar;
      for (let i = 0; i < 10; i++) {
        const hx = i * 420 - sim.cameraX * 0.25;
        ctx.fillRect(hx, GROUND_Y - 76, 150, 76);
        ctx.fillRect(hx + 170, GROUND_Y - 108, 110, 108);
      }

      ctx.fillStyle = palette.hillNear;
      for (let i = 0; i < 12; i++) {
        const hx = i * 320 - sim.cameraX * 0.45;
        ctx.fillRect(hx + 40, GROUND_Y - 46, 130, 46);
      }

      // Parallax minimalist clouds
      ctx.fillStyle = palette.cloud;
      for (let i = 0; i < 12; i++) {
        const cx = i * 310 - sim.cameraX * 0.35 + 60;
        const cy = 42 + (i % 3) * 32;
        ctx.fillRect(cx, cy, 56, 16);
        ctx.fillRect(cx + 12, cy - 10, 32, 10);
      }

      // Camera transform for world elements
      ctx.save();
      ctx.translate(-sim.cameraX, 0);

      // Zone labels in the sky
      ctx.font = '500 11px "JetBrains Mono", monospace';
      ctx.fillStyle = palette.muted;
      ctx.fillText('1-1 · PROFILE', 44, 34);
      ctx.fillText('1-2 · PROJECTS [HIT ? BLOCKS]', 760, 34);
      ctx.fillText('1-3 · CAREER TIMELINE', 1690, 34);
      ctx.fillText('1-4 · CONNECT CASTLE', 2650, 34);

      // Spawn sign
      ctx.fillStyle = palette.brick;
      ctx.fillRect(46, GROUND_Y - 44, 6, 44);
      ctx.fillStyle = palette.accent;
      ctx.fillRect(24, GROUND_Y - 70, 52, 28);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '600 10px "JetBrains Mono", monospace';
      ctx.fillText('START', 34, GROUND_Y - 52);

      // Ground
      ctx.fillStyle = palette.groundBody;
      ctx.fillRect(0, GROUND_Y, WORLD_WIDTH, VIEW_HEIGHT - GROUND_Y);
      ctx.fillStyle = palette.groundTop;
      ctx.fillRect(0, GROUND_Y, WORLD_WIDTH, 7);
      ctx.strokeStyle = palette.groundGrid;
      ctx.lineWidth = 1;
      for (let gx = 0; gx < WORLD_WIDTH; gx += 36) {
        ctx.beginPath();
        ctx.moveTo(gx, GROUND_Y + 7);
        ctx.lineTo(gx, VIEW_HEIGHT);
        ctx.stroke();
      }

      // Platforms, pipes & stairs
      for (const plat of sim.platforms) {
        if (plat.kind === 'pipe') {
          ctx.fillStyle = palette.pipe;
          ctx.fillRect(plat.x + 4, plat.y + 12, plat.w - 8, plat.h - 12);
          ctx.fillStyle = palette.pipeDark;
          ctx.fillRect(plat.x, plat.y, plat.w, 14);
        } else if (plat.kind === 'step') {
          ctx.fillStyle = palette.step;
          ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
          ctx.strokeStyle = palette.brickBorder;
          ctx.strokeRect(plat.x + 0.5, plat.y + 0.5, plat.w - 1, plat.h - 1);
        } else {
          ctx.fillStyle = palette.brick;
          ctx.fillRect(plat.x, plat.y, plat.w, plat.h);
          ctx.strokeStyle = palette.brickBorder;
          ctx.strokeRect(plat.x + 0.5, plat.y + 0.5, plat.w - 1, plat.h - 1);
        }
      }

      // Mystery ? Project Blocks
      const pulseOffset = Math.sin(now / 260) * 2;
      for (const block of sim.blocks) {
        const by = block.y + block.bounceY + (block.hit ? 0 : pulseOffset * 0.4);
        ctx.fillStyle = block.hit ? palette.blockHit : palette.blockActive;
        ctx.fillRect(block.x, by, block.w, block.h);
        ctx.strokeStyle = isDark ? '#F4F4F5' : '#18181B';
        ctx.lineWidth = 2;
        ctx.strokeRect(block.x, by, block.w, block.h);

        ctx.fillStyle = block.hit ? palette.muted : palette.blockText;
        ctx.font = '700 15px "JetBrains Mono", monospace';
        const glyph = block.hit ? `0${block.projectIndex + 1}` : '?';
        ctx.fillText(glyph, block.x + (block.hit ? 10 : 15), by + 26);

        // Mini label below block
        const proj = projects[block.projectIndex];
        if (proj) {
          ctx.font = '500 10px "JetBrains Mono", monospace';
          ctx.fillStyle = palette.muted;
          const shortTitle = proj.title.split(' ')[0];
          ctx.fillText(shortTitle, block.x - 2, by - 7);
        }
      }

      // Collectible Skill Coins
      const bob = Math.sin(now / 220) * 3;
      for (const coin of sim.coins) {
        if (coin.collected) continue;
        const cy = coin.y + bob;
        ctx.fillStyle = palette.accent;
        ctx.beginPath();
        ctx.arc(coin.x + 13, cy + 13, 13, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = '700 8px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(coin.label, coin.x + 13, cy + 16);
        ctx.textAlign = 'start';
      }

      // Career Checkpoints
      for (const cp of sim.checkpoints) {
        ctx.fillStyle = palette.muted;
        ctx.fillRect(cp.x, cp.y - 84, 4, 84);
        const flagY = cp.reached ? cp.y - 80 : cp.y - 48;
        ctx.fillStyle = cp.reached ? '#10B981' : palette.step;
        ctx.beginPath();
        ctx.moveTo(cp.x + 4, flagY);
        ctx.lineTo(cp.x + 34, flagY + 11);
        ctx.lineTo(cp.x + 4, flagY + 22);
        ctx.closePath();
        ctx.fill();

        const item = timeline[cp.timelineIndex];
        if (item) {
          const yearLabel = item.period.match(/\d{4}/)?.[0] ?? item.period.slice(0, 4);
          ctx.font = '600 10px "JetBrains Mono", monospace';
          ctx.fillStyle = cp.reached ? (isDark ? '#34D399' : '#059669') : palette.muted;
          ctx.fillText(yearLabel, cp.x - 8, cp.y - 92);
        }
      }

      // Goal Flagpole & Minimalist Castle
      ctx.fillStyle = isDark ? '#E4E4E7' : '#27272A';
      ctx.fillRect(FLAGPOLE_X, 92, 5, GROUND_Y - 92);
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(FLAGPOLE_X + 2.5, 88, 6, 0, Math.PI * 2);
      ctx.fill();

      // Goal Flag
      ctx.fillStyle = sim.cleared ? '#10B981' : palette.accent;
      ctx.fillRect(FLAGPOLE_X + 5, 102 + sim.flagSlide, 34, 22);

      // Castle
      const castleX = 2940;
      ctx.fillStyle = palette.brick;
      ctx.fillRect(castleX, GROUND_Y - 96, 96, 96);
      ctx.fillRect(castleX + 18, GROUND_Y - 126, 60, 30);
      // Battlements
      for (let b = 0; b < 5; b++) {
        ctx.fillRect(castleX + b * 20, GROUND_Y - 106, 12, 10);
      }
      // Doorway
      ctx.fillStyle = palette.groundBody;
      ctx.fillRect(castleX + 36, GROUND_Y - 46, 24, 46);

      // Particles
      for (const pt of sim.particles) {
        ctx.globalAlpha = Math.max(0, pt.life * 1.5);
        ctx.fillStyle = pt.color;
        ctx.fillRect(pt.x, pt.y, 5, 5);
      }
      ctx.globalAlpha = 1;

      // Pixel Engineer Hero Sprite
      const px = Math.round(p.x);
      const py = Math.round(p.y);
      const stride = p.onGround && Math.abs(p.vx) > 20 ? Math.sin(p.walkPhase) * 4 : 0;

      ctx.save();
      ctx.translate(px + PLAYER_W / 2, py);
      ctx.scale(p.dir, 1);
      ctx.translate(-PLAYER_W / 2, 0);

      // Backpack
      ctx.fillStyle = isDark ? '#52525B' : '#3F3F46';
      ctx.fillRect(1, 15, 6, 13);
      // Hoodie torso
      ctx.fillStyle = palette.accent;
      ctx.fillRect(6, 14, 16, 14);
      // Head
      ctx.fillStyle = '#FDBA74';
      ctx.fillRect(7, 3, 14, 11);
      // Hair / Cap
      ctx.fillStyle = '#18181B';
      ctx.fillRect(6, 0, 16, 5);
      ctx.fillRect(17, 3, 6, 2);
      // Glasses
      ctx.fillStyle = '#09090B';
      ctx.fillRect(14, 6, 6, 3);
      // Legs
      ctx.fillStyle = isDark ? '#E4E4E7' : '#18181B';
      ctx.fillRect(7 + stride, 28, 5, 10);
      ctx.fillRect(15 - stride, 28, 5, 10);

      ctx.restore();
      ctx.restore();

      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [projects, timeline, theme, spawnParticles, triggerBlockDiscovery]);

  // Allow clicking directly on a ? block in the canvas
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setStarted(true);
    containerRef.current?.focus();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left + simRef.current.cameraX;
    const clickY = e.clientY - rect.top;

    for (const block of simRef.current.blocks) {
      if (
        clickX >= block.x - 8 &&
        clickX <= block.x + block.w + 8 &&
        clickY >= block.y - 8 &&
        clickY <= block.y + block.h + 8
      ) {
        triggerBlockDiscovery(block);
        return;
      }
    }
  };

  const setControl = (key: 'left' | 'right', active: boolean) => {
    if (active) setStarted(true);
    simRef.current.keys[key] = active;
  };

  const triggerJump = () => {
    setStarted(true);
    const p = simRef.current.player;
    if (p.onGround) {
      p.vy = JUMP_VEL;
      p.onGround = false;
      soundFx.playJump();
    }
  };

  const checkpointItem =
    lastCheckpointIdx !== null ? timeline[lastCheckpointIdx] : null;

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      aria-label="Interactive 2D Side-Scrolling CV Game"
      className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/70 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 shadow-xs"
    >
      {/* Tidy Game HUD Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 bg-slate-50/90 dark:bg-slate-950/80">
        <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs tabular-nums">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 dark:text-slate-400">{ui.game.stageLabel[lang]}</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">
              {currentStageCode}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 dark:text-slate-400">{ui.game.coinsLabel[lang]}</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {String(coinsCount).padStart(2, '0')}/{String(totalCoins).padStart(2, '0')}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500 dark:text-slate-400">{ui.game.blocksLabel[lang]}</span>
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              {String(blocksCount).padStart(2, '0')}/{String(totalBlocks).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? ui.game.soundOff[lang] : ui.game.soundOn[lang]}
            className="min-h-[36px] px-2.5 py-1.5 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 cursor-pointer whitespace-nowrap"
          >
            {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {muted ? ui.game.soundOff[lang] : ui.game.soundOn[lang]}
            </span>
          </button>

          <button
            type="button"
            onClick={resetWorld}
            className="min-h-[36px] px-2.5 py-1.5 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 cursor-pointer whitespace-nowrap"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{ui.game.reset[lang]}</span>
          </button>
        </div>
      </div>

      {/* Stage Warp Bar */}
      <div className="px-4 sm:px-5 py-2 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar bg-white dark:bg-slate-900/50">
        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap shrink-0">
          {ui.game.warpLabel[lang]}
        </span>
        {ui.game.stages.map((st) => {
          const isCurrent = currentStageCode === st.code;
          return (
            <button
              key={st.code}
              type="button"
              onClick={() => warpToStage(st.id)}
              className={`min-h-[32px] px-2.5 py-1 text-[11px] font-mono rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isCurrent
                  ? 'border-indigo-600 bg-indigo-600 text-white dark:border-indigo-400 dark:bg-indigo-400 dark:text-slate-950'
                  : 'border-slate-200 dark:border-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
              }`}
            >
              {st.code} {st.label[lang]}
            </button>
          );
        })}
      </div>

      {/* Canvas Viewport */}
      <div className="relative w-full h-[340px] select-none overflow-hidden">
        <canvas
          ref={canvasRef}
          onClick={handleCanvasClick}
          className="block w-full h-[340px] cursor-pointer"
        />

        {/* Initial Start Overlay */}
        {!started && !stageClear && (
          <div className="absolute inset-0 bg-slate-950/30 dark:bg-slate-950/55 backdrop-blur-[2px] flex items-center justify-center p-4">
            <div className="max-w-sm w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#0F172A]/95 p-5 text-center space-y-3 shadow-xl">
              <div className="mx-auto w-10 h-10 rounded-xl bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
                  {profile.name} · WORLD 1-1
                </p>
                <h3 className="font-serif text-xl text-slate-900 dark:text-slate-100">
                  {ui.game.startPrompt[lang]}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {ui.game.controlsHint[lang]}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setStarted(true);
                  soundFx.playCoin();
                  containerRef.current?.focus();
                }}
                className="w-full min-h-[44px] px-5 py-2.5 text-sm font-medium rounded-xl bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 transition-colors cursor-pointer"
              >
                {ui.game.startAction[lang]}
              </button>
            </div>
          </div>
        )}

        {/* Stage Clear Overlay */}
        {stageClear && (
          <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="max-w-md w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0F172A] p-6 text-center space-y-4 shadow-2xl">
              <div className="mx-auto w-10 h-10 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Flag className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-serif text-2xl text-slate-900 dark:text-slate-100">
                  {ui.game.stageClearTitle[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {ui.game.stageClearDesc[lang]}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-200 dark:border-slate-800 font-mono tabular-nums text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    {ui.game.coinsLabel[lang]}
                  </span>
                  <span className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                    {coinsCount}/{totalCoins}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block">
                    {ui.game.blocksLabel[lang]}
                  </span>
                  <span className="text-base font-semibold text-amber-600 dark:text-amber-400">
                    {blocksCount}/{totalBlocks}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={resetWorld}
                  className="flex-1 min-h-[44px] px-4 py-2 text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {ui.game.playAgain[lang]}
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateSection('connect')}
                  className="flex-1 min-h-[44px] px-4 py-2 text-xs font-medium rounded-xl bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {ui.game.jumpToConnect[lang]}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Discovery Banner + Tactile Arcade Controls */}
      <div className="px-4 sm:px-5 py-3.5 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/90 dark:bg-slate-950/80 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Live Discovery Readout */}
        <div className="min-h-[44px] flex items-center justify-between gap-3 flex-1">
          {lastUnlockedProject ? (
            <div className="flex items-center justify-between gap-3 w-full rounded-xl border border-amber-500/40 bg-amber-500/10 px-3.5 py-2">
              <div className="min-w-0">
                <span className="block text-[10px] font-mono text-amber-700 dark:text-amber-400">
                  {ui.game.blockHitPrefix[lang]}
                </span>
                <span className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                  {lastUnlockedProject.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onSelectProject(lastUnlockedProject)}
                className="min-h-[36px] px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white whitespace-nowrap shrink-0 cursor-pointer"
              >
                {ui.game.inspectAction[lang]}
              </button>
            </div>
          ) : checkpointItem ? (
            <div className="flex items-center gap-2.5 w-full rounded-xl border border-teal-500/30 bg-teal-500/10 px-3.5 py-2">
              <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[10px] font-mono text-teal-700 dark:text-teal-400">
                  {ui.game.checkpointPrefix[lang]} · {checkpointItem.period}
                </span>
                <span className="block text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                  {checkpointItem.role[lang]} — {checkpointItem.organization}
                </span>
              </div>
            </div>
          ) : (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {ui.game.controlsHint[lang]}
            </p>
          )}
        </div>

        {/* Holdable Arcade Touch & Mouse Controls */}
        <div className="flex items-center justify-between md:justify-end gap-2 touch-none select-none shrink-0">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Move Left"
              onPointerDown={() => setControl('left', true)}
              onPointerUp={() => setControl('left', false)}
              onPointerLeave={() => setControl('left', false)}
              onPointerCancel={() => setControl('left', false)}
              className="min-h-[48px] min-w-[54px] flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 active:scale-95 active:bg-slate-100 dark:active:bg-slate-800 transition-transform cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Move Right"
              onPointerDown={() => setControl('right', true)}
              onPointerUp={() => setControl('right', false)}
              onPointerLeave={() => setControl('right', false)}
              onPointerCancel={() => setControl('right', false)}
              className="min-h-[48px] min-w-[54px] flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 active:scale-95 active:bg-slate-100 dark:active:bg-slate-800 transition-transform cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <button
            type="button"
            onPointerDown={triggerJump}
            className="min-h-[48px] px-5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 font-mono text-xs font-semibold active:scale-95 transition-all cursor-pointer whitespace-nowrap"
          >
            <ArrowUp className="w-4 h-4" />
            <span>JUMP</span>
          </button>
        </div>
      </div>
    </div>
  );
}
