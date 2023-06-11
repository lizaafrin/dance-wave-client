import React from 'react';
import Class from '../Shared/Class';

const EnrollClassTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index) + "</span>";
        },
    };
    return (
        <div className=' grid md: grid-cols-3 gap-10'>
        {
            items.map(item => <Class
                key={item._id}
                item={item}></Class>)
        }
    </div>
    );
};

export default EnrollClassTab;