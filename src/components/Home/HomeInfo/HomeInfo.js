import './HomeInfo.css';
import { BiBus, BiBell } from 'react-icons/bi';
import { BsTruck } from 'react-icons/bs';
import { HiArrowSmRight } from 'react-icons/hi';

import infoPic1 from '../../../images/info1.png';
import infoPic2 from '../../../images/info2.png';
import infoPic3 from '../../../images/info3.png';

const HomeInfo = () => {
    return (
        <div className="home_info mt-9 px-3 md:px-7">
            <h1 className='font-medium text-3xl sm:text-2xl'>Why you choose us</h1>
            <p className='leading-5 pt-2 text-slate-500 text-sm sm:text-xs sm:w-2/3 md:w-2/4 lg:w-2/5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis voluptate iure, odio quidem iusto alias dolor minima excepturi corrupti ab vel.</p>
            <div className="home_info_main grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
                <div>
                    <img src={infoPic1} alt="" />
                    <div className='flex p-2 mt-2 mb-9'>
                        <div className='mr-2'>
                            <BiBus className='text-3xl p-2 rounded-full text-white bg-red-500' />
                        </div>
                        <div>
                            <h3 className='font-medium sm:text-sm mb-2'>Fast Delivery</h3>
                            <p className='text-sm sm:text-xs text-slate-500 leading-5 mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum excepturi, sint facilis dicta cumque perferendis explicabo quas ipsam facere provident asperiores numquam, quisquam, vel illum.</p>
                            <a href="" className='inline-flex items-center text-blue-500 font-medium sm:text-sm hover:underline'>Learn More <HiArrowSmRight className='ml-2 w-4 h-4 bg-green-400 text-white rounded-full' /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={infoPic2} alt="" />
                    <div className='flex p-2 mt-2 mb-9'>
                        <div className='mr-2'>
                            <BiBell className='text-3xl p-2 rounded-full text-white bg-red-500' />
                        </div>
                        <div>
                            <h3 className='font-medium sm:text-sm mb-2'>A Good Auto Responder</h3>
                            <p className='text-sm sm:text-xs text-slate-500 leading-5 mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum excepturi, sint facilis dicta cumque perferendis explicabo quas ipsam facere provident asperiores numquam, quisquam, vel illum.</p>
                            <a href="" className='inline-flex items-center text-blue-500 font-medium sm:text-sm hover:underline'>Learn More <HiArrowSmRight className='ml-2 w-4 h-4 bg-green-400 text-white rounded-full' /></a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={infoPic3} alt="" />
                    <div className='flex p-2 mt-2 mb-9'>
                        <div className='mr-2'>
                            <BsTruck className='text-3xl p-2 rounded-full text-white bg-red-500' />
                        </div>
                        <div>
                            <h3 className='font-medium sm:text-sm mb-2'>Home Delivery</h3>
                            <p className='text-sm sm:text-xs text-slate-500 leading-5 mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum excepturi, sint facilis dicta cumque perferendis explicabo quas ipsam facere provident asperiores numquam, quisquam, vel illum.</p>
                            <a href="" className='inline-flex items-center text-blue-500 font-medium sm:text-sm hover:underline'>Learn More <HiArrowSmRight className='ml-2 w-4 h-4 bg-green-400 text-white rounded-full' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeInfo;