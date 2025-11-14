import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  isCorrect?: boolean;
  disabled?: boolean;
  onSubmit?: () => void;
}

export function CodeEditor({ value, onChange, placeholder, isCorrect, disabled, onSubmit }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current && !disabled) {
      textareaRef.current.focus();
    }
  }, [disabled]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Ctrl/Cmd + Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && onSubmit && !disabled) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="relative">
      <motion.div
        animate={{
          boxShadow: isCorrect
            ? '0 0 20px rgba(34, 197, 94, 0.5)'
            : '0 0 10px rgba(168, 85, 247, 0.3)',
        }}
        className="relative"
      >
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full bg-slate-950 border-2 border-purple-500/50 rounded p-4 text-amber-300 font-mono min-h-[120px] focus:outline-none focus:border-purple-400 placeholder:text-slate-600 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
          spellCheck={false}
        />
      </motion.div>

      {/* Glowing rune effects when correct */}
      {isCorrect && (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full blur-xl opacity-50"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -bottom-2 -left-2 w-8 h-8 bg-green-500 rounded-full blur-xl opacity-50"
          />
        </>
      )}
    </div>
  );
}