import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logo } from '../../assets/index';
import { usa } from '../../assets/index';
import { allItems } from '../../constants/index';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { userSignOut } from '../../redux/amazonSlice';
import HeaderBottom from './HeaderBottom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';

const Header =()=> {
    const auth = getAuth();
    const dispatch = useDispatch();
    const [showAll, setShowAll] = useState(false);
    /*information gathered from our global state (the store) for conditional rendering of:
    -> the number of items in our cart (line 23)
    -> the user's username*/
    const products = useSelector((state)=>state.amazonReducer.products);
    const userInfo = useSelector((state)=> state.amazonReducer.userInfo);

    /*log out function adapted from Firebase's documentation*/
    const handleLogout =()=>{
        signOut(auth)
            .then(()=> {
                dispatch(userSignOut());
            }).catch((error)=> {

            });
    }

    return (
        <div className='w-full sticky top-0 z-50'>
            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
                <Link to='/'>
                    <div className='headerHover'>
                        <img src={logo} alt='amazon logo' className='w-24 mt-2'/>
                    </div>
                </Link>
                <div className='headerHover hidden mdl:inline-flex'>
                    <LocationOnOutlinedIcon/>
                    <p className='text-sm text-lightText font-light flex flex-col'>
                        Deliver to
                        <span className='text-sm font-semibold -mt-1 text-whiteText'>
                            Uruguay
                        </span>
                    </p>
                </div>
                <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
                    <span onClick={()=>setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
                        All
                        <span>
                            <ArrowDropDownOutlinedIcon/>
                        </span>
                        {showAll && (
                            <div>
                                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                                    {allItems.map((item) => <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200' key={item._id}>{item.title}</li>)}
                                </ul>
                            </div>
                        )}
                    </span>
                    <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text' aria-label="search bar"/>
                    <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#F3A847] duration-300  text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                        <SearchIcon/>
                    </span>
                </div>
                <div className='hidden mdl:flex items-start justify-center headerHover relative px-4 py-3'>
                    <img className='w-6' src={usa} alt='flag image'/>
                    <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex ml-2'>EN</p>
                </div>
                <Link to='/signin'>
                    <div className='flex flex-col items-start justify-center headerHover'>
                        {
                            userInfo?(
                                <p className='text-sm text-gray-100 font-medium capitalize'>
                                    {userInfo.userName}
                                </p>
                            ):(
                                <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>
                                    Hello, sign in
                                </p>
                            )
                        }
                        <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>Accounts & Lists <span><ArrowDropDownOutlinedIcon/></span></p>
                    </div>
                </Link>
                <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
                    <p className='text-xs text-lightText font-light'>Returns</p>
                    <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
                </div>
                <Link to='/cart'>
                    <div className='flex items-start justify-center headerHover relative'>
                        <ShoppingCartIcon/>
                        <p className='text-xs font-semibold mt-3 text-whiteText'>
                            Cart
                            <span className='absolute text-sm -top-1 left-6 font-semibold p-1 h-4 bg-[#F3A847] text-amazon_blue rounded-full flex justify-center items-center'>
                                {products.length > 0 ? products.length:0}
                            </span>
                        </p>
                    </div>
                </Link>
                {userInfo && (
                    <div
                        onClick={handleLogout}
                        className='flex flex-col justify-center items-center headerHover relative'>
                        <LogoutIcon/>
                        <p className='hidden mdl:inline-flex text-xs font-semibold text-whiteText'>Log out</p>
                    </div>
                )}
            </div>
            <HeaderBottom/>
        </div>
    )
};

export default Header;