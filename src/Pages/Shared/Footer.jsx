
import { Link } from 'react-router-dom';
import footer from '../../assets/footer.jpg';
import logo from '/logo.png';



const Footer = () => {
    return (
        <footer>
            <div className="hero bg-gradient-to-r from-slate-400 via-slate-950 to-slate-400" style={{ backgroundImage: `url(${footer})` }}>
                <div className="hero-overlay bg-opacity-80 pb-20">
                    <div className="flex items-end gap-2 justify-center pt-4">
                        <img className='w-10 h-10 bg-orange-200 rounded-e-full rounded-r-3xl rounded-l-xl' src={logo} alt="" srcset="" />
                        <h1 className="mt-2 text-3xl font-bold text-orange-400 italic">DanceWave Club</h1>

                    </div>
                    <hr className='w-2/4 mx-auto my-2' />

                    <div className='pt-8 grid grid-cols-3'>
                        <div className='text-lg text-white italic text-center'>
                            <h1 className='text-orange-400 italic text-center font-bold'>Address </h1>
                            <p className='text-sm'>36, Battersea Square, LONDON </p>
                            <h3 className='text-sm'>Tel: 01624-621440</h3>

                        </div>
                        <div>
                            <h1 className='text-lg text-orange-400 italic text-center font-bold'>Contact us with</h1>
                            <div className="grid justify-center gap-2 grid-flow-col text-white ">
                                <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                            </div>
                        </div>
                        <div className="form-control h-3/4 w-3/4 ps-6">
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label> */}
                            <input type="text" placeholder="email" className="input input-bordered" />
                            <textarea className="textarea textarea-warning mt-2" placeholder="Feedback"></textarea>
                            <button className="btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-400 lg:w-2/4 my-2 py-2 h-fit">Send Feedback</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-black text-white'>
                <p className='py-2 text-center italic text-orange-400'>Copyright © 2023 - All right reserved by DanceWave Club</p>
            </div>
        </footer>
    );
};

export default Footer;

{/* <div className="footer p-10 mt-14 bg-purple-200 ">
<div className='w-full'  style={{ backgroundImage:  url("https://img.freepik.com/free-vector/flat-design-dance-show-twitch-banner_23-2149338775.jpg?w=900&t=st=1686464730~exp=1686465330~hmac=708030b56d653444dea36466d558ad8dac12c1f35ba92607e379138dac824820")}} >
    {/* <img className='rounded-xl w-full bg-opacity-10' src={footer} alt="" srcset="" /> */}
// </div>
// {/* <div>
//     <img className='w-10 h-10' src={logo} alt="" srcset="" />
//     <h3 className='text-xl font-bold italic text-orange-400'>DanceWave</h3>
// </div> */}
{/* <div>
    <span className="footer-title">Social</span>
    <div className="grid grid-flow-col gap-4">
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
</div> */}
// </div>
// <div className="footer-center p-4 bg-base-300 text-base-content">
//     <div>
//         <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
//     </div>
// </div> */}