"use client"; 
import NavBar from '@/components/common/NavBar';
import React, {useState} from 'react'



function page() {
  return (
    <div className='px-64'>
   <NavBar/>
   <div className='h-12'></div>
    <ProductPage/>
    </div>
  )
}





const ProductPage: React.FC = () => {
    const [images, setImages] = useState({
        img1 : "https://tour.epesicloud.com/app/storage/uploads/37/1669975907_69_file_(6).jpg",
        img2 : "https://tour.epesicloud.com/app/storage/uploads/37/1669976050_41_serenity-on-the-lake-magu-1608625709.jpg",
        img3 : "https://tour.epesicloud.com/app/storage/uploads/37/1669975854_79_101735_v6.jpeg",
        img4 : "https://tour.epesicloud.com/app/storage/uploads/37/1669975883_1_file_(5).jpg"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);


    return (
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center  background-color:black'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-96 aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 text-3xl font-bold'>12 DAYS KENYA & TANZANIA COMBO MIDRANGE SAFARI </span>
                </div>
                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <h6 className='text-2xl font-semibold'>$ 199.00</h6>
                <div className='flex flex-row items-center gap-12'>
             
                    <a href="/destinations/1"><button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>View Destination</button></a>
                </div>
            </div>
        </div>
    )
}








export default page