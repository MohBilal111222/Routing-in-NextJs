import React from 'react'
import Link from 'next/link';
import AboutPage from './About/page';
import ContactPage from './Contact/page';
import ServicePage from './Services/page';

const Home = () => {
  return (
    <>
    <div className='bg-blue-500 text-white-500'>

    <h1 className='text-center text-4xl font-bold'>Home</h1>


<button className="btn btn-primary"><Link href={'/About'}>About</Link></button> <br /><br />
<button className="btn btn-primary"><Link href={'/Contact'}>Contact</Link></button> <br /><br />
<button className="btn btn-primary"><Link href={'/Service'}>Service</Link></button> <br /><br />





    </div>

    </>





  )
}

export default Home