// src/pages/ErrorPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-lightgreen text-white bg-black/95 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-2xl">Oops! The page you're looking for doesn't exist.</p>
      <button
        className="mt-6 px-6 py-3 bg-[#9EFF00] text-black text-3xl rounded hover:bg-black hover:text-white transition-all ease-in-out duration-200"
        onClick={() => navigate('/')}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
