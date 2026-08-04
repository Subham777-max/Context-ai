
const AuthButton = ({
  children,
  type = 'button',
  loading = false,
  disabled = false,
  onClick,
  variant = 'primary', // 'primary' | 'secondary'
  className = '',
  ...props
}) => {
  const baseStyles = 'w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-1';
  
  const variants = {
    primary: 'bg-white text-black border border-white hover:bg-neutral-200 focus:ring-white',
    secondary: 'bg-transparent text-white border border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 focus:ring-neutral-700',
  };

  const currentVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${currentVariant} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'active:scale-[0.98]'} ${className}`}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default AuthButton;
