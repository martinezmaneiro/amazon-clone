import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { motion } from 'framer-motion';
import SideNavContent from './SideNavContent';

const HeaderBottom =()=> {
    /*this hook is used to reference a value without causing re-renders. In this particular case it will reference the sidebar element*/
    const ref = useRef();
    /*this state hook is used for the conditional rendering of the sidebar div container element*/
    const [sidebar, setSidebar] = useState(false);
    /*within this useEffect hook we create a function that sets the sidebar display (by conditional rendering in the return statement below) to false
    whenever the container is clicked*/
    useEffect(() => {
        document.body.addEventListener('click', (e) =>{
            if(e.target.contains(ref.current)){
                setSidebar(false)
            }
        })
    }, [ref, sidebar]);
    /*we call the useSelector hook to bring the userInfo from the global state so we can display the user's username on the sidebar*/
    const userInfo = useSelector((state)=> state.amazonReducer.userInfo);

    return (
        <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li onClick={() => setSidebar(true)} className='headerHover flex items-center gap-1'><MenuIcon/>All</li>
                <li className='headerHover hidden md:inline-flex'>Today's Deals</li>
                <li className='headerHover hidden md:inline-flex'>Customer Service</li>
                <li className='headerHover hidden md:inline-flex'>Gift Cards</li>
                <li className='headerHover hidden md:inline-flex'>Registry</li>
                <li className='headerHover hidden md:inline-flex'>Sell</li>
            </ul>
            {sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        {/*framer-motion effect for a smooth initial translation*/}
                        <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:0.5}} className='md:w-[350px] w-[100%] h-auto md:h-[100%] bg-white border border-black'>
                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4'>
                                <AccountCircleIcon/>
                                {
                                    userInfo?
                                        (<h3 className='font-titleFont font-bold text-lg tracking-wide capitalize'>Hello, {userInfo.userName}</h3>)
                                        :
                                        (<h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>)
                                }
                            </div>
                            <SideNavContent title='Digital Content & Devices' one='Amazon Music' two='Kindle E--readers & Books' three='Amazon Appstore'/>
                            <SideNavContent title='Shop By Department' one='Electronics' two='Computers' three='Smart Home'/>
                            <SideNavContent title='Programs & Features' one='Gift Cards' two='Amazon live' three='International Shopping'/>
                            <SideNavContent title='Help & Settings' one='Your Account' two='Customer Service' three='Contact us'/>
                            <span onClick={() => setSidebar(false)} className='cursor-pointer absolute top-[2px] md:top-0 right-[2px] md:left-[360px] w-10 h-10 text-white md:text-black flex items-center justify-center md:border md:bg-gray-200 hover:bg-red-500 hover:text-white duration-300'>
                                <CloseIcon/>
                            </span>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    )
};

export default HeaderBottom;