import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Renowned = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])
    return (
        <div className='bg-yellow-200 mt-20 pb-16 text-center mx-auto'>
            <div className='py-10'>
                <h3>We make you want to dance..Right Now</h3>
                <hr className='w-1/12 mx-auto m-2 font-bold' />
                <h1 className='text-lg text-indigo-400 uppercase font-semibold'>The renowned dancers of different genres</h1>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div data-aos="zoom-in">
                    <img className='w-16 h-16 rounded-full mx-auto' src='https://img.freepik.com/free-photo/positive-attractive-teenage-girl-talented-popular-singer-plays-acoustic-guitar-presents-her-new-rock-song-has-long-ginger-hair-wears-hat-orange-jacket_273609-50882.jpg?w=826&t=st=1686485256~exp=1686485856~hmac=9ea0b3045dd787336430baa2d579b7f2a9b77ca6da7aaa0e90e761ea24e5776c' alt="" srcset="" />
                    <h1 className='pt-4 font-bold uppercase'>Bobie Jackson</h1>
                    <h2 className='text-sm uppercase'>
                        Salsa Music
                    </h2>
                    <hr className='w-1/12 mx-auto m-2 font-bold' />
                    <p className='text-slate-500 text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div  data-aos="zoom-in">
                    <img className='w-16 h-16 rounded-full mx-auto' src='https://img.freepik.com/free-photo/handsome-young-acoustic-guitar-blues-player-with-tattoos-arms-performing-his-musical-skills_613910-9241.jpg?w=826&t=st=1686485872~exp=1686486472~hmac=8807eccad41394f23ae67c2dcd280d788090e709117545cc4b66df2ea85e4e5b' alt="" srcset="" />
                    <h1  className='pt-4 font-bold uppercase'>Sylve herrik</h1>
                    <h2  className='text-sm uppercase'>
                        Hiphop specialist
                    </h2>
                    <hr className='w-1/12 mx-auto m-2 font-bold' />
                    <p className='text-slate-500 text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
                <div data-aos="zoom-in">
                    <img className='w-16 h-16 rounded-full mx-auto' src='https://img.freepik.com/free-photo/smiley-man-playing-guitar_23-2148628982.jpg?w=826&t=st=1686485975~exp=1686486575~hmac=00e2429f6bd6c6e328ec06e5fbe77a423e356fdd157f80d2748c995d2ac326dd' alt="" srcset="" />
                    <h1  className='pt-4 font-bold uppercase'>Inez Hernandez</h1>
                    <h2  className='text-sm uppercase'>
                        Salsa Dance
                    </h2>
                    <hr className='w-1/12 mx-auto m-2 font-bold' />
                    <p className='text-slate-500 text-sm '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. .</p>
                </div>
            </div>
        </div>
    );
};

export default Renowned;