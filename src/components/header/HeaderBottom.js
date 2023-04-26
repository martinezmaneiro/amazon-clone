import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderBottom =()=> {
    return (
        <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li className='headerHover flex items-center gap-1'><MenuIcon/>All</li>
                <li className='headerHover'>Today's Deals</li>
                <li className='headerHover'>Customer Service</li>
                <li className='headerHover'>Gift Cards</li>
                <li className='headerHover'>Registry</li>
                <li className='headerHover'>Sell</li>
            </ul>
        </div>
    )
};

export default HeaderBottom;