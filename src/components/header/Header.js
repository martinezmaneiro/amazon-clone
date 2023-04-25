import { logo } from "../../assets/index";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

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
        </div>
    )
};

export default Header;