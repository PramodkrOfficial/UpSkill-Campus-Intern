import React from 'react';
import Navbar from '../components/Navbar';
import Source from '../components/Source';
// import Freebook from '../components/Freebook';
import Footer from '../components/Footer';

function Courses() {
    return (
        <>
            <div className=''>
                <Navbar />
                <Source />
                {/* <Freebook /> */}
                <div className='max-w-screen-full container pt-40 mx-auto w-full:px-10 flex-row dark:bg-slate-900 dark:text-white'>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Courses