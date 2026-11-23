import {Check} from 'lucide-react';

interface ToastProps {
  visible: boolean;
  message: string;
}

export function Toast({visible, message}: ToastProps) {
  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-lg text-xs font-medium border border-slate-800 dark:border-slate-200"
    >
      <Check className="w-4 h-4 text-teal-400 dark:text-teal-600 shrink-0" />
      <span>{message}</span>
    </div>
  );
}
