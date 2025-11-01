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
  const books1 = [
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book2.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book3.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book4.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book5.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book6.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book7.JPG",
    },
  ];

  const books2 = [
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book8.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book9.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book10.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book11.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book12.png",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book13.JPG",
    },
  ];

  const books3 = [
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book14.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book15.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book16.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book17.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book18.JPG",
    },
    {
      title: "شفای زندگی",
      condition: "در حد نو",
      price: "۱۳۰٬۲۵۰",
      image: "/book3.JPG",
    },
  ];

  const genres = [
    {
      title: "کتاب شعر",
      image: "/book3.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book4.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book5.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book6.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book7.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book8.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book9.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book10.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book11.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book12.png",
    },
    {
      title: "کتاب شعر",
      image: "/book13.JPG",
    },
    {
      title: "کتاب شعر",
      image: "/book14.JPG",
    },
  ];

  return (
    <div className="w-[80vw] mx-auto">
      <div className="w-full">
        <Banner />
        <FirstCarousel images={books1}/>
        <FirstSBanner img1={img1} img2={img2} />
        <FirstCarousel images={books2}/>
        <FirstSBanner img1={img3} img2={img4} />
        <FirstCarousel images={books3}/>
        <FirstSBanner img1={img5} img2={img6} />
        <FirstCarousel images={books1}/>
        <SecBanner />
        <Genre genres = {genres}/>
        <Description />
        
      </div>
    </div>
  );
}

export default Home
