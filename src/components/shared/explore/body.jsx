import React from 'react'
import Card from './card'
import StarIcon from '../../../assets/star_icon.png'
import ArrowIcon from '../../../assets/arrow_icon.png'
import { CardData1, CardData2, CardData3 } from '../../../constants/data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-2xl'>Featured</h2>
                    <div className='flex gap-3'>
                        <div><button><img src={StarIcon} alt="Star Icon" className="h-6 w-6 invert" /></button></div>
                        <div><button className='bg-indigo-800 rounded-md w-12 h-6 text-sm border-2 border-white'>More</button></div>
                        <div><button><img src={ArrowIcon} alt="Arrow Icon" className="h-6 w-6 invert" /></button></div>
                    </div>
                </div>
                <div className='container mx-auto p-6 '>
                    <div className=''>
                            {CardData1.map((value) => (
                                <Card key={value.id}
                                    title={value.title}
                                    img={value.img}
                                    link={value.link}
                                />
                            ))}
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-2xl'>Learn through some amazing courses</h2>
                    <div className='flex gap-3'>
                        <div><button><img src={StarIcon} alt="Star Icon" className="h-6 w-6 invert" /></button></div>
                        <div><button className='bg-indigo-800 rounded-md w-12 h-6 text-sm border-2 border-white'>More</button></div>
                        <div><button><img src={ArrowIcon} alt="Arrow Icon" className="h-6 w-6 invert" /></button></div>
                    </div>
                </div>
                <div className='container mx-auto p-6 '>
                    <div>
                        <Slider {...settings}>
                        
                            {CardData2.map((value) => (
                                <Card key={value.id}
                                    title={value.title}
                                    img={value.img}
                                    link={value.link}
                                />
                            ))}
                           
                        </Slider>
                    </div>
                </div>
            </div>


            <div>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-2xl'>Interview Sessions</h2>
                    <div className='flex gap-3'>
                        <div><button><img src={StarIcon} alt="Star Icon" className="h-6 w-6 invert" /></button></div>
                        <div><button className='bg-indigo-800 rounded-md w-12 h-6 text-sm border-2 border-white'>More</button></div>
                        <div><button><img src={ArrowIcon} alt="Arrow Icon" className="h-6 w-6 invert" /></button></div>
                    </div>
                </div>
                <div className='container m-auto p-6 '>
                    <div className=''>
                        <Slider {...settings}>
                            {CardData3.map((value) => (
                                <Card key={value.id}
                                    title={value.title}
                                    img={value.img}
                                    link={value.link}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Body
