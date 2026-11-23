import {ArrowUpRight, Check, Copy, Github, Globe, Linkedin, Mail, Send} from 'lucide-react';
import {useState} from 'react';
import type {Language, SocialLink} from '../types/portfolio';
import {PORTFOLIO_DATA} from '../data/portfolioData';

interface ConnectSectionProps {
  lang: Language;
  onEmailCopied: () => void;
}

function renderSocialIcon(id: SocialLink['id']) {
  switch (id) {
    case 'github':
      return <Github className="w-5 h-5" />;
    case 'linkedin':
      return <Linkedin className="w-5 h-5" />;
    case 'website':
      return <Globe className="w-5 h-5" />;
    case 'email':
      return <Mail className="w-5 h-5" />;
  }
}

export function ConnectSection({lang, onEmailCopied}: ConnectSectionProps) {
  const {profile, socials, ui} = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      onEmailCopied();
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = profile.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      onEmailCopied();
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="connect"
      className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left invitation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-mono tracking-wide text-indigo-600 dark:text-indigo-400">
                {ui.sections.connectEyebrow[lang]}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl tracking-tight font-normal text-slate-900 dark:text-slate-100 [text-wrap:balance]">
                {ui.sections.connectTitle[lang]}
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {ui.sections.connectSubtitle[lang]}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium rounded-xl bg-slate-900 text-white hover:bg-indigo-600 dark:bg-indigo-500 dark:text-white dark:hover:bg-indigo-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? ui.connect.copiedToast[lang] : ui.connect.copyEmail[lang]}</span>
              </button>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors whitespace-nowrap shrink-0"
              >
                <Send className="w-4 h-4" />
                <span>{ui.connect.directMessage[lang]}</span>
              </a>
            </div>
          </div>

          {/* Right Social Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((item) => {
              const isMail = item.id === 'email';
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target={isMail ? undefined : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  className="group rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-5 flex flex-col justify-between gap-4 hover:border-indigo-300 dark:hover:border-indigo-700/80 transition-colors min-h-[132px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      {renderSocialIcon(item.id)}
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {item.label}
                      </span>
                      <span className="font-mono text-xs text-slate-500 dark:text-slate-400 truncate">
                        {item.handle}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {item.description[lang]}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
