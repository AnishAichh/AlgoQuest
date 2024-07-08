import React from 'react'
import Card from './card'
import StarIcon from '../../../assets/star_icon.png'
import ArrowIcon from '../../../assets/arrow_icon.png'
import { CardData1, CardData2, CardData3 } from '../../../constants/data'

const Body = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div>
                <div className='flex justify-between'>
                    <h2 className='font-bold text-2xl'>Featured</h2>
                    <div className='flex justify end gap-3'>
                        <div><button><img src={StarIcon} alt="Star Icon" className="h-6 w-6 invert" /></button></div>
                        <div><button className='bg-indigo-800 rounded-md w-12 h-6 text-sm border-2 border-white'>More</button></div>
                        <div><button><img src={ArrowIcon} alt="Arrow Icon" className="h-6 w-6 invert" /></button></div>
                    </div>
                </div>
                <div className='container mx-auto p-6 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
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
                    <div className='flex justify end gap-3'>
                        <div><button><img src={StarIcon} alt="Star Icon" className="h-6 w-6 invert" /></button></div>
                        <div><button className='bg-indigo-800 rounded-md w-12 h-6 text-sm border-2 border-white'>More</button></div>
                        <div><button><img src={ArrowIcon} alt="Arrow Icon" className="h-6 w-6 invert" /></button></div>
                    </div>
                </div>
                <div className='container mx-auto p-6 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                        {CardData2.map((value) => (
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
                    <h2 className='font-bold text-2xl'>Interview Sessions</h2>
                    <div className='flex justify end gap-3'>
                        <div><button><img src={StarIcon} alt="Star Icon" className="h-6 w-6 invert" /></button></div>
                        <div><button className='bg-indigo-800 rounded-md w-12 h-6 text-sm border-2 border-white'>More</button></div>
                        <div><button><img src={ArrowIcon} alt="Arrow Icon" className="h-6 w-6 invert" /></button></div>
                    </div>
                </div>
                <div className='container mx-auto p-6 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                        {CardData3.map((value) => (
                            <Card key={value.id}
                                title={value.title}
                                img={value.img}
                                link={value.link}
                            />
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Body
