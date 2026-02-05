import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const photos = [
    '/assets/fish_example.webp',
    '/assets/fish_example.webp',
    '/assets/fish_example.webp',
    '/assets/fish_example.webp',
    '/assets/fish_example.webp',
    '/assets/fish_example.webp',
    '/assets/fish_example.webp',
    '/assets/fish_example.webp',
];

const PhotoPage = () => {
    const { photoId } = useParams();
    const navigate = useNavigate();
    const [activePhoto, setActivePhoto] = useState(null);
    const [isUploadOpen, setIsUploadOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#184477] text-white p-8">
            <div className="mb-6 grid grid-cols-3 items-center">
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => navigate('/catches')}
                        className="rounded-full px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition"
                        aria-label="Back to folders"
                    >
                        <svg
                            viewBox="0 0 28 24"
                            className="h-5 w-7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 4L4 12L12 20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4 12H24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="text-lg font-semibold tracking-wide text-white text-center">
                    <span className="text-white/80">{photoId}</span>
                </div>
                <div className="flex items-center justify-end">
                    <button
                        onClick={() => setIsUploadOpen(true)}
                        className="flex items-center gap-2 rounded-full px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition"
                        aria-label="Upload"
                    >
                        <span className="text-xl leading-none">+</span>
                        <span className="text-lg font-medium">Upload</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 xl:grid-cols-4 gap-6">
                {photos.map((src, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActivePhoto(src)}
                        className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={src}
                            alt=""
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                    </button>
                ))}
            </div>

            {activePhoto && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
                    onClick={() => setActivePhoto(null)}
                >
                    <div
                        className="relative flex flex-col items-center gap-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={activePhoto}
                            alt=""
                            className="max-h-[85vh] max-w-[85vw] rounded-2xl shadow-2xl"
                        />

                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 text-white hover:bg-white/20 transition">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 3v10l4-4 1.4 1.4L12 16.8l-5.4-5.4L8 9l4 4V3h0zM5 19h14v2H5z" />
                                </svg>
                                Download
                            </button>
                            <button className="flex items-center gap-2 rounded-full px-4 py-2 bg-red-600 text-white hover:bg-red-500 transition">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 7h12l-1 14H7L6 7zm3-3h6l1 2H8l1-2z" />
                                </svg>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isUploadOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6"
                    onClick={() => setIsUploadOpen(false)}
                >
                    <div
                        className="w-full max-w-md rounded-2xl bg-white text-gray-900 p-6 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-lg font-semibold">Upload photos</h2>
                            <button
                                onClick={() => setIsUploadOpen(false)}
                                className="rounded-full px-3 py-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
                                aria-label="Close upload"
                            >
                                ×
                            </button>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            JPEG or PNG only. Max 10MB per photo. No videos.
                        </p>
                        <label
                            htmlFor="photo-upload"
                            className="border border-dashed border-gray-300 rounded-xl p-5 text-center text-sm text-gray-500 flex flex-col items-center gap-2 cursor-pointer hover:border-gray-400 hover:text-gray-600 transition"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 16V6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M8 10L12 6L16 10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4 18H20"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span>
                                Drag and drop files here, or click to browse.
                            </span>
                        </label>
                        <input
                            id="photo-upload"
                            type="file"
                            accept="image/png,image/jpeg"
                            multiple
                            className="hidden"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhotoPage;