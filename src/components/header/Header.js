import { logo } from "../../assets/index";

const Header =()=> {
    return (
        <div className='w-full bg-amazon_blue text-white px-4 py-3'>
            <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
                <img src={logo} alt='amazon logo' className='w-24 mt-2'/>
            </div>
        </div>
    )
};

export default Header;