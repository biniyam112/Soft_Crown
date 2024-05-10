import Image from 'next/image'
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';

const LogIn = () => {
    return (
        <>
            <div className="container grid grid-cols-2" >
                <div className="left-side-component col-span-1 m-10">
                    <Image src="/images/hertz_logo.png" alt="logo" width={80} height={24} />
                    <p className=''>Welcome to Herts management system! Login to your account.</p>
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Button className=''>Log in</Button>

                </div>
                <div className="col-span-1">

                </div>

            </div>
        </>
    )
}

export default LogIn