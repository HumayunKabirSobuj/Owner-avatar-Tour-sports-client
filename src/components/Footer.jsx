
import { Link } from "react-router-dom";
const Footer = () => {
    return (

        <footer className="py-6  max-w-[85%]  mx-auto space-y-8 md:space-y-12 rounded-lg bg-base-100 shadow-2xl">
            <div className=" px-6 mx-auto space-y-6 divide-y  md:space-y-12 divide-opacity-50">

                <div className="flex flex-col  lg:flex-row  lg:justify-between">

                    <div className=" items-center lg:items-start lg:w-1/2 w-full  pb-6   flex flex-col justify-evenly p-4 gap-2">
                        {/* brand */}
                        <div className="flex text-4xl items-center gap-2 font-extrabold">
                            <Link to='/' className=" flex items-center md:font-bold">
                            <span ><font color="text-red-500">Tour</font>Sports</span>
                            </Link>
                        </div>


                        {/* logo */}
                        <div>
                            <p className="pb-1 text-2xl font-medium mb-2">Social links</p>
                            <div className="flex  space-x-4 ">

                               
                                <a rel="noopener noreferrer" href="https://github.com/HumayunKabirSobuj" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* category */}
                        <div className=" text-center md:text-left ">
                            <p className="pb-1 text-2xl font-medium mb-2">Useful links</p>
                            <ul className=" flex flex-col lg:flex-row lg:justify-between gap-3">
                                <li>
                                    <Link to="/" rel="noopener noreferrer" className="hover:text-violet-600 text-lg">Home</Link>
                                </li>
                                <li>
                                    <Link to="/allTour" rel="noopener noreferrer" className="hover:text-violet-600 text-lg">All Tourist spots</Link>
                                </li>
                                <li>
                                    <Link to="/addTour" rel="noopener noreferrer" className="hover:text-violet-600 text-lg">Add Tourist spots</Link>
                                </li>
                                <li>
                                    <Link to="/myList" rel="noopener noreferrer" className="hover:text-violet-600 text-lg">My list</Link>
                                </li>

                            </ul>
                        </div>
                    </div>


                    <form className="lg:w-1/2 w-full space-y-6 pb-6  ">
                        <h1 className='text-2xl md:text-4xl mx-auto  font-bold text-center mb-6 w-2/3 md:w-full bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'>Contact Now</h1>

                        <div>
                            <label htmlFor="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="border-2 border-slate-800 w-full p-3 rounded " />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="border-2 border-slate-800 w-full p-3 rounded " />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="border-2 border-slate-800 w-full p-3 rounded "></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-primary text-gray-50 ">Send Message</button>
                    </form>

                </div>

                <div className="py-6 text-lg text-center ">
                    © 2024 GoWilds. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;