import React, { useState, useEffect } from 'react';
import { Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';
import './LoginSignup.css'


type ViewType = 'login' | 'signup';

const LoginSignup: React.FC = () => {
    const [view, setView] = useState<ViewType>('login');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Basic validation check
    const isLoginValid = formData.email && formData.password;
    const isSignupValid =
        formData.name &&
        formData.email &&
        formData.password &&
        formData.confirmPassword &&
        formData.password === formData.confirmPassword;

    const isFormValid = view === 'login' ? isLoginValid : isSignupValid;

    // Reset form when switching views
    useEffect(() => {
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }, [view]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;

        // Simulate API call
        console.log(`Submitting ${view} form`, formData);
        alert(`${view === 'login' ? 'Logged In' : 'Signed Up'} successfully! (Check console for data)`);
    };

    return (
            <div className="auth-container">
                <div className="auth-card">

                    {/* Header */}
                    <div className="auth-header">
                        <h1>{view === 'login' ? 'Welcome Back' : 'Create Account'}</h1>
                        <p>
                            {view === 'login'
                                ? 'Enter your credentials to access your account'
                                : 'Get started with your free account today'}
                        </p>
                    </div>

                    {/* Form */}
                    <form className="auth-form" onSubmit={handleSubmit}>

                        {/* Name Field (Signup Only) */}
                        {view === 'signup' && (
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <div className="input-wrapper">
                                    <User className="input-icon" size={20} />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <div className="input-wrapper">
                                <Mail className="input-icon" size={20} />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    placeholder="name@company.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <Lock className="input-icon" size={20} />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-input"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Confirm Password (Signup Only) */}
                        {view === 'signup' && (
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input-wrapper">
                                    <CheckCircle className="input-icon" size={20} />
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        className="form-input"
                                        placeholder="••••••••"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={!isFormValid}
                        >
                            {view === 'login' ? 'Sign In' : 'Sign Up'}
                            <ArrowRight size={18} />
                        </button>
                    </form>

                    {/* Footer / Toggle */}
                    <div className="auth-footer">
                        {view === 'login' ? (
                            <span>
                Don't have an account?
                <a
                    href="#"
                    className="toggle-link"
                    onClick={(e) => { e.preventDefault(); setView('signup'); }}
                >
                  Sign up
                </a>
              </span>
                        ) : (
                            <span>
                Already have an account?
                <a
                    href="#"
                    className="toggle-link"
                    onClick={(e) => { e.preventDefault(); setView('login'); }}
                >
                  Log in
                </a>
              </span>
                        )}
                    </div>

                </div>
            </div>

    );
};

export default LoginSignup;