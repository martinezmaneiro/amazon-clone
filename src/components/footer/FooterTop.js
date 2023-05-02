import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FooterTop =()=> {
    {/*if userInfo is truthy (the user is logged in), this component will not render the signin/register container*/}
    const userInfo = useSelector((state)=> state.amazonReducer.userInfo);

    return (
        <div className='w-full bg-white py-6'>
            <div className='w-full border-t-[1px] py-8'>
                <div className='w-64 mx-auto text-center flex flex-col gap-1'>
                    {
                    userInfo?
                        (<div>{' '}</div>)
                        :(<div>
                            <p className='text-sm'>See personalized recommendations</p>
                            <Link to='signin'>
                                <button className='w-full bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 acive:bg-yellow-700'>Sign in</button>
                            </Link>
                            <p className='text-xs mt-1'>New Customer?
                                <Link to='/registration'>
                                    <span className='text-blue-600 ml-1 cursor-pointer'>Start here.</span>
                                </Link>
                            </p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
};

export default FooterTop;