import { useState } from 'react';
import { logo } from "../../assets/index";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
/*import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';*/
import SearchIcon from '@mui/icons-material/Search';

const Header =()=> {
    const [showAll, setShowAll] = useState(false);
    const allItems = [
        {
        _id:'101', title: 'All Departments'
        },
        {
        _id:'102', title: 'Arts & Crafts'
        },
        {
        _id:'103', title: 'Automotive'
        },
        {
        _id:'104', title: ' Baby'
        },
        {
        _id:'105', title: 'Beauty & Personal Care'
        },
        {
        _id:'106', title: 'Books'
        },
        {
        _id:'107', title: 'Boys\' fashion'
        },
        {
        _id:'108', title: 'Computers'
        },
        {
        _id:'109', title: 'Deals'
        },
        {
        _id:'110', title: 'Digital Music'
        },
        {
        _id:'111', title: 'Electronics'
        },
        {
        _id:'112', title: 'Girls\' Fashion'
        },
        {
        _id:'113', title: 'Health & Household'
        },
        {
        _id:'114', title: 'Home & Kitchen'
        },
        {
        _id:'115', title: 'Industrial & Scientific'
        },
        {
        _id:'116', title: 'Kindle Store'
        },
        {
        _id:'117', title: 'Luggage'
        },
        {
        _id:'118', title: 'Men\'s Fashion'
        },
        {
        _id:'119', title: 'Movies & TV'
        },
        {
        _id:'120', title: 'Music. CDs & Vinyl'
        },
        {
        _id:'121', title: 'Pet Supplies'
        },
        {
        _id:'122', title: 'Prime Video'
        },
        {
        _id:'123', title: 'Software'
        },
        {
        _id:'124', title: 'Sports & Outdoors'
        },
        {
        _id:'125', title: 'Tools & Home Improvement'
        },
        {
        _id:'126', title: 'Toys & Games'
        },
        {
        _id:'127', title: 'Video Games'
        },
        {
        _id:'128', title: 'Women\'s Fashion'
        },
    ]

    return (
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
            <div className='headerHover'>
                <img src={logo} alt='amazon logo' className='w-24 mt-2'/>
            </div>
            <div className='headerHover'>
                <LocationOnOutlinedIcon/>
                <p className='text-sm text-lightText font-light flex flex-col'>
                    Deliver to
                    <span className='text-sm font-semibold -mt-1 text-whiteText'>
                        Uruguay
                    </span>
                </p>
            </div>
            <div className='h-10 rounded-md flex flex-grow relative'>
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
                <input className='h-full text-base text-amazon_blue flex-grow outline-none border-none px-2' type='text'/>
                <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#F3A847] duration-300  text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'>
                    <SearchIcon/>
                </span>
            </div>
        </div>
    )
};

export default Header;