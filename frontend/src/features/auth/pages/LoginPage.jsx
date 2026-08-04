import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
  const { loading, login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const res = await login(formData);
    if (!res.success) {
      setErrors((prev) => ({ ...prev, error: res.error }));
    } else {
      navigate('/');
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your account"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {errors.error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg text-xs flex items-center gap-2 mb-4">
            <svg className="w-4.5 h-4.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{errors.error}</span>
          </div>
        )}

        {/* Email Field */}
        <AuthInput
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="name@example.com"
          error={errors.email}
          required
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
            </svg>
          }
        />

        {/* Password Field */}
        <div className="relative">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Password <span className="text-red-500">*</span>
            </span>
            <a href="#" className="text-xs text-neutral-400 hover:text-white transition-colors duration-200">
              Forgot password?
            </a>
          </div>
          <AuthInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            error={errors.password}
            required
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
          />
        </div>

        {/* Remember Me checkbox */}
        <div className="flex items-center justify-between py-1">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="accent-white h-4 w-4 bg-neutral-900 border-neutral-800 rounded focus:ring-offset-0 focus:ring-0"
            />
            <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-200 select-none">
              Remember me
            </span>
          </label>
        </div>

        {/* Submit button */}
        <AuthButton type="submit" loading={loading} variant="primary" className="mt-2">
          Sign In
        </AuthButton>

        <div className="mt-6 border-t border-neutral-900 pt-6">
          <p className="text-xs text-neutral-500 text-center">
            Don't have an account?{' '}
            <Link to="/register" className="text-white hover:underline font-semibold">
              Create an account
            </Link>
          </p>
        </div>
      </form>

    </AuthLayout>
  );
};

export default LoginPage;
