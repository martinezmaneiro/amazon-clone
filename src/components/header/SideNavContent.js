import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SideNavContent =()=> {
    return (
        <div className='py-3 border-b-[1px] border-b-gray-300'>
            <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>
                Digital Content & Devices
            </h3>
            <ul>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 '>
                    Amazon Music
                    <span><KeyboardArrowRightIcon/></span>
                </li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 '>
                    Amazon Music
                    <span><KeyboardArrowRightIcon/></span>
                </li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 '>
                    Amazon Music
                    <span><KeyboardArrowRightIcon/></span>
                </li>
            </ul>
        </div>
    )
};

export default SideNavContent;