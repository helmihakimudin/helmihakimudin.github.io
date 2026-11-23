// Synthesized 8-bit chiptune sound effects via Web Audio API (no external audio files required)

class SoundEngine {
  private ctx: AudioContext | null = null;
  public muted = false;

  private getContext(): AudioContext | null {
    if (this.muted || typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as {webkitAudioContext?: typeof AudioContext}).webkitAudioContext;
      if (!AudioCtx) return null;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  private playTone(
    freqStart: number,
    freqEnd: number,
    duration: number,
    type: OscillatorType = 'square',
    volume = 0.06,
    delay = 0,
  ) {
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, now);
    if (freqEnd !== freqStart) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(freqEnd, 20), now + duration);
    }

    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  }

  playJump() {
    this.playTone(220, 520, 0.13, 'square', 0.045);
  }

  playCoin() {
    this.playTone(987.77, 987.77, 0.06, 'square', 0.05, 0);
    this.playTone(1318.51, 1318.51, 0.14, 'square', 0.05, 0.06);
  }

  playBlockHit() {
    this.playTone(330, 660, 0.09, 'triangle', 0.07, 0);
    this.playTone(880, 1046.5, 0.14, 'square', 0.045, 0.07);
  }

  playCheckpoint() {
    this.playTone(523.25, 523.25, 0.08, 'triangle', 0.06, 0);
    this.playTone(659.25, 659.25, 0.08, 'triangle', 0.06, 0.08);
    this.playTone(783.99, 783.99, 0.14, 'triangle', 0.06, 0.16);
  }

  playStageClear() {
    const notes = [523.25, 659.25, 783.99, 1046.5, 783.99, 1046.5];
    const times = [0, 0.09, 0.18, 0.27, 0.4, 0.52];
    const durs = [0.08, 0.08, 0.08, 0.11, 0.09, 0.28];
    notes.forEach((n, idx) => {
      this.playTone(n, n, durs[idx], 'square', 0.05, times[idx]);
    });
  }
}

export const soundFx = new SoundEngine();
