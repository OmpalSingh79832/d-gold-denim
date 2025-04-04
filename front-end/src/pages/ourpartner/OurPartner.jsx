import React, { useEffect } from 'react';
import PartnerImg from '../../assets/images/ourpartnerbanner.jpg';
import Img1 from '../../assets/images/4.png';
import Img2 from '../../assets/images/5.png';
import Img3 from '../../assets/images/6.png';
import Img4 from '../../assets/images/7.jpg';
import Img5 from '../../assets/images/8.png';
import Img6 from '../../assets/images/indiamart.jpg';
import Img7 from '../../assets/images/logo2.png';
import { Helmet } from "react-helmet";

const OurPartner = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Partners D-Gold Jeans</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className="w-full homeslide sm:h-[155px] md:h-[310px] lg:h-[500px]">
                <img
                    src={PartnerImg}
                    alt="About Banner"
                    className="w-full h-full"
                />
              
            </div>
            <div>
                <div className="mt-10 w-fit mx-auto">
                    <h1 className="sm:text-xl md:text-3xl text-center text-gray-900">
                        Our Online <span className="text-[#27497b] font-bold">Partners</span>
                    </h1>
                    <div className="border-b-2 border-black w-[80%] mx-auto mt-4"></div>
                </div>
                <p className='sm:w-[90%] md:container mx-auto text-center mt-4 text-gray-600 sm:text-sm md:text-lg'>D-Gold Denim has its own brand image in the market which you can discover with our products loaded with varieties of designs to buy at popular online selling platforms. Here are some of our best known online selling platforms.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto my-10'>
                <div>
                    <img src={Img1} alt="" />
                </div>
                <div>
                    <img src={Img2} alt="" />
                </div>
                <div>
                    <img src={Img3} alt="" />
                </div>
                <div>
                    <img src={Img4} alt="" />
                </div>
                <div className='mt-10'>
                    <img src={Img5} alt="" />
                </div>
                <div className='mt-10'>
                    <img src={Img6} alt="" />
                </div>
                <div className='mt-10'>
                    <img src={Img7} alt="" />
                </div>
            </div>
        </>
    )
}

export default OurPartner