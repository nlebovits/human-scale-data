interface WordmarkProps {
  className?: string;
}

export function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <span className={`wm ${className}`}>
      human scale data<span className="dot">.</span>
    </span>
  );
}
