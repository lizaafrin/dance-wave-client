import React from 'react';
import Class from '../../Shared/Class';
import Cover from '../../Shared/Cover';
import ClassItem from '../../Shared/ClassItem';
import { Link } from 'react-router-dom';

const ClassCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-3 gap-10 my-16">
                {/* {
                    items.map(item => <Class key={item._id}
                        item={item}></Class>).slice(0, 3)
                } */}
                {
                    items.map(item => <ClassItem key={item._id}
                        item={item}></ClassItem>).slice(0, 3)
                }
            </div>
            <Link to={`/enroll/${title}`}>
                <button className="btn btn-outline bg-lime-100 text-center my-4 block mx-auto border-t-4 border-b-4">See All Classes of this category</button>
            </Link>
        </div>
    );
};

export default ClassCategory;