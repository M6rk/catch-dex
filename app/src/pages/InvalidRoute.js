import React from 'react';
export default function InvalidRoute() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-sky-400">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-2xl text-gray-100 mb-8">Page Not Found</p>
                <p className="text-gray-100 mb-8">The page you're looking for doesn't exist.</p>
                <a
                    href="/"
                    className="inline-block bg-sky-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-sky-600 transition"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}