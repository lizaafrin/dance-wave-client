import React from 'react';
import bg from '/bg.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelectedClass from '../../Hooks/useSelectedClass';

const Class = ({ item }) => {
    const { name, details, image, fee,instructorName,availableSeats, _id
    } = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedClass, refetch] = useSelectedClass();

    const handleSelect = item =>{
        console.log(item);
        if(user && user.email){
            const selectedClass = { name, instructorName, fee, email: user.email
            }
            fetch('http://localhost:5000/selectedclass',{
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
            .then(res=> res.json())
            .then(data => {
                console.log(data);
                // refetch();
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Selected class added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else if(data.message) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'This class already selected',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to select the Class',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card card-side bg-amber-50 shadow-xl">
            <figure className='w-1/2'><img className='rounded-xl h-[95%]' src={image} alt="Movie" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p className='font-semibold'>Course Fee: {fee}$</p>
                <div className="card-actions justify-start">
                    <button onClick={()=>  handleSelect(item)} className="btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-100">SElect</button>
                </div>
            </div>
        </div>
    );
};

export default Class;