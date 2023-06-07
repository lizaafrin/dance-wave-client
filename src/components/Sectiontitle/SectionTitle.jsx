import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <div className="mx-auto text-center md:w-3/12 my-8">
                <p className="text-yellow-600 mb-2">{" "}{subHeading}{" "}</p>
                <hr className='mb-1 border-yellow-600' />
                <hr className='mb-1 border-yellow-600' />
             
                <div className='bg-slate-300 mt-8'>
                    <h3 className="uppercase text-2xl border-x-4 py-4 m-2 rounded-xl">{heading}</h3>
                </div>
            </div>
        </>
    );
};

export default SectionTitle;