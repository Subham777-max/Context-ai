import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/AuthLayout';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import { useAuth } from '../hooks/useAuth';

const RegisterPage = () => {
  const { loading, register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
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
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms of Service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const res = await register(formData);
    if (!res.success) {
      setErrors((prev) => ({ ...prev, error: res.error }));
    } else {
      navigate('/');
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join Context.ai to start collaborating with intelligence"
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

        {/* Name Field */}
        <AuthInput
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          error={errors.name}
          required
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          }
        />

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
        <AuthInput
          label="Password"
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

        {/* Confirm Password Field */}
        <AuthInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          error={errors.confirmPassword}
          required
          icon={
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          }
        />

        {/* Terms Checkbox */}
        <div className="flex flex-col py-1">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="accent-white h-4 w-4 bg-neutral-900 border-neutral-800 rounded focus:ring-offset-0 focus:ring-0"
            />
            <span className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors duration-200 select-none">
              I agree to the{' '}
              <a href="#" className="text-white hover:underline font-semibold">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-white hover:underline font-semibold">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeTerms && <span className="text-xs text-red-500 mt-1">{errors.agreeTerms}</span>}
        </div>

        {/* Submit button */}
        <AuthButton type="submit" loading={loading} variant="primary" className="mt-2">
          Create Account
        </AuthButton>

        <div className="mt-6 border-t border-neutral-900 pt-6">
          <p className="text-xs text-neutral-500 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-white hover:underline font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </form>

    </AuthLayout>
  );
};

export default RegisterPage;
