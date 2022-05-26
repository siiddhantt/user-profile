import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
    }, []);
    return (
        <div className='bg_image'>
            <section className="text-white">
                <div className="max-w-screen-xl px-4 py-28 mx-auto lg:h-screen lg:items-center lg:flex">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                            WatchList

                        </h1>

                        <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-800 via-blue-500 to-purple-600">
                            Save your watchlist!
                        </p>
                        <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                            Simple web-app to locally store your watchlist. Source code is available on my GitHub :D
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <a className="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="/login">
                                Login page  
                            </a>

                            <a className="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="https://github.com/siiddhantt">
                                My GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default LandingPage
