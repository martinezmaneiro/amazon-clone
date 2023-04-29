import { darkLogo } from '../assets/index';

const SignIn =()=> {
    return (
        <div className='w-full'>
            <div className='w-full bg-gray-100'>
                <form className='w-[350px] mx-auto'>
                    <img className='w-32' src={darkLogo} alt='logo'/>
                    <div className='w-full border border-zinc-200 p-6'>
                        <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign In</h2>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col gap-3'>
                                <p className='text-sm font-medium'>Email or mobile phone number</p>
                                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#E77600] focus-within:shadow-amazonInput duratin-100' type='email' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm font-medium'>Password</p>
                                <input className='w-full lowercase py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#E77600] focus-within:shadow-amazonInput duratin-100' type='password' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignIn;