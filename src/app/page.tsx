import Banner from '@/components/Banner'
import Description from '@/components/Description'
import FirstCarousel from '@/components/firstCarousel'
import FirstSBanner from '@/components/FirstSBanner'
import Genre from '@/components/Genre'
import SecBanner from '@/components/SecBanner'
import React from 'react'

const Home = () => {
  const img1 = '/left1.png'
  const img2 = '/left2.png'
  const img3 = '/left3.png'
  const img4 = '/left4.png'
  const img5 = '/left5.png'
  const img6 = '/left6.png'
  return (
    <div className="w-[80vw] mx-auto">
      <div className="w-full">
        <Banner />
        <FirstCarousel />
        <FirstSBanner img1={img1} img2={img2} />
        <FirstCarousel />
        <FirstSBanner img1={img3} img2={img4} />
        <FirstCarousel />
        <FirstSBanner img1={img5} img2={img6} />
        <FirstCarousel />
        <SecBanner />
        <Genre />
        <Description />
        
      </div>
    </div>
  );
}

export default Home
