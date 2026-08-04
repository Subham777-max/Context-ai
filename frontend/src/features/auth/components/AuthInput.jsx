import { useState } from 'react';

const AuthInput = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  name,
  required = false,
  icon,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="w-full flex flex-col gap-1.5 mb-4">
      {label && (
        <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-4 text-neutral-400 flex items-center justify-center">
            {icon}
          </span>
        )}
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full bg-neutral-900 border ${
            error ? 'border-red-500 focus:border-red-500' : 'border-neutral-800 focus:border-neutral-200'
          } text-white rounded-lg py-3 ${
            icon ? 'pl-11' : 'pl-4'
          } ${isPassword ? 'pr-11' : 'pr-4'} text-sm placeholder-neutral-500 outline-none transition-all duration-300`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none"
          >
            {showPassword ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default AuthInput;
