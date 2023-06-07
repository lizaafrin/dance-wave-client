import React from 'react';
import Class from '../../Shared/Class';

const ClassCategory = ({items}) => {
    return (
        <div className="grid md:grid-cols-2 gap-10 my-16">

        {
            items.map(item => <Class key={item._id}
                item={item}></Class>).slice(0, 4)
        }
    </div>
    );
};

export default ClassCategory;