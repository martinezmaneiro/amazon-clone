import { logo } from "../../assets/index";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header =()=> {
    return (
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
            <div className='headerHover'>
                <img src={logo} alt='amazon logo' className='w-24 mt-2'/>
            </div>
            <div className='headerHover'>
                <LocationOnOutlinedIcon/>
                <p className='text-sm text-lightText font-light flex flex-col'>Deliver to <span className='text-sm font-semibold -mt-1 text-whiteText'>Uruguay</span></p>
            </div>
            <div className='h-10 rounded-md flex flex-grow relative'>
                <span>All <span><ArrowDropDownOutlinedIcon/></span></span>
                <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text'/>
                <span><SearchIcon/></span>
            </div>
        </div>
    )
};

export default Header;