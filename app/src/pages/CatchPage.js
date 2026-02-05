import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const FolderCard = ({ name = 'Folder Name', onClick }) => {
    return (
        <button onClick={onClick} className="flex flex-col items-center gap-3 group">
            <svg
                viewBox="0 0 24 24"
                className="w-32 md:w-40 lg:w-48 h-auto fill-yellow-300 transition-transform duration-200 group-hover:scale-105 group-hover:drop-shadow-lg"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" />
            </svg>

            <div className="max-w-[16ch] whitespace-normal px-2 py-1 text-xs md:text-sm bg-white/20 text-white rounded-lg backdrop-blur-sm text-center">
                {name}
            </div>
        </button>
    );
};

const CreateFolderButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
        >
            <span className="text-lg leading-none">+</span>
            New Folder
        </button>
    );
};

const CatchPage = () => {
    const navigate = useNavigate();

    const folders = [
        { id: 'largemouth-bass', name: 'Largemouth' },
        { id: 'smallmouth-bass', name: 'Smallmouth' },
        { id: 'rainbow-trout', name: 'Trout' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'catfish', name: 'Catfish' },
        { id: 'salmon', name: 'Salmon' },
    ];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-[#184477] text-white">
            <NavBar loggedIn="true"/>
            <div className="mt-28 px-6 sm:px-10">
                <CreateFolderButton onClick={() => navigate('/catches/new')} />
            </div>
            <div className="grid grid-cols-3 gap-8 px-6 py-10 sm:px-10 sm:py-12 relative z-10 justify-items-center">
                {folders.map((folder) => (
                    <FolderCard
                        key={folder.id}
                        name={folder.name}
                        onClick={() => navigate(`/catches/${folder.id}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CatchPage;