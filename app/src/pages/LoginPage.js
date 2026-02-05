import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
export default function LoginPage() {
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        console.log('Google login clicked');
        navigate('/catches');
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#184477]">
            <NavBar />
            <div className="fixed inset-0 bg-black/10 flex items-center justify-center p-4 z-40">
                <div className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-lg border border-white/60">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap">
                            Welcome to <span className="text-blue-600">Catch Dex</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500">
                            Organize your catches with a clean, simple photo library.
                        </p>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-3 shadow-sm"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Sign in with Google
                    </button>

                    <button
                        disabled
                        className="w-full mt-4 bg-gray-100 border border-gray-300 text-gray-500 font-semibold py-3 px-4 rounded-xl cursor-not-allowed opacity-60 flex items-center justify-center gap-3"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#5580e6" d="M11.4 24H0V12.6h11.4V24z" />
                            <path fill="#e1df41" d="M24 12.6H12.6V24H24z" />
                            <path fill="#cf3131" d="M11.4 11.4H0V0h11.4z" />
                            <path fill="#5bcb58" d="M24 11.4H12.6V0H24z" />
                        </svg>
                        Sign in with OneDrive
                    </button>

                    <div className="mt-5 flex items-center">
                        <button
                            onClick={() => navigate('/')}
                            className="rounded-full px-5 py-2 text-2xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
                            aria-label="Back to home"
                        >
                            ←
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}