import React from 'react';
import Class from '../../Shared/Class';
import Cover from '../../Shared/Cover';

const ClassCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-3 gap-10 my-16">
                {
                    items.map(item => <Class key={item._id}
                        item={item}></Class>).slice(0, 3)
                }
            </div>
            <button className="btn btn-glass text-center my-4 block mx-auto">Choose your Favourite dance</button>
        </div>
    );
};

export default ClassCategory;