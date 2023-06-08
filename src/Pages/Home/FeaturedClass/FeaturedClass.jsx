import React from 'react';
import SectionTitle from '../../../components/Sectiontitle/SectionTitle'; 
import featuredImg from '../../../assets/banner4.jpg';
import './FeaturedClass.css';

const FeaturedClass = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle 
            subHeading={'Check it Out'}
            heading={'Featured Class'}
            ></SectionTitle>
            <div className="gap-10 md:flex justify-center items-center pb-20 pt-12 px-28 bg-slate-500 bg-opacity-60">
                
                <div className="">
                    <p>Aug 20, 2019</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet sit natus porro, omnis quasi exercitationem ipsam itaque cumque ad voluptas, ut, libero possimus officia commodi? Recusandae qui voluptates necessitatibus alias saepe animi tempora asperiores nesciunt consequuntur veniam natus modi ad, doloribus quae. Impedit ullam dolores, libero repellat fugiat tenetur sit.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
                <div>
                    <img className='rounded-lg' src={featuredImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeaturedClass;