import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div>
            <div className="mx-auto text-center md:w-3/12 my-8">
                <p className="text-yellow-600 mb-2">---{" "}{subHeading}{" "}---</p>
                <h3 className="uppercase text-3xl border-y-4 py-4">{heading}</h3>
            </div>
        </div>
    );
};

export default SectionTitle;