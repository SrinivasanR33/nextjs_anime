"use client"
import { CSSProperties, useState } from 'react';
// CenterBox.tsx
import styles from './styles.module.css';
import { motion } from "framer-motion";
import { landingpageImageList, landingpageImageList2 } from '@/app/commen/CommenName';
import { homeImageList } from '@/app/commen/CommenTypeDefination';
import MyImage from '@/app/component/ImageComponent/CustomImage';
const MiddleBox: React.FC = () => {
    const [currentStyle, setcurrentStyle] = useState(1)
    const Openstyle: CSSProperties = {
        width: 500,
        height: 600,
        background: "gray",
        transition: 'width 1s ease-in',
        cursor: 'pointer'
    }
    const Closestyle: CSSProperties = {
        width: 100,
        height: 600,
        transition: 'width 1s ease-in',
        background: "gray",
        cursor: 'pointer'
    }

    return (
        // <div className={`${styles.container}`}>
        //     <div className='flex flex-row justify-center' onMouseLeave={() => setcurrentStyle(1)}>
        //         {landingpageImageList.map((val: homeImageList, i) => (
        //             <div className='border-base-200 ' key={i} >
        //                 <motion.div
        //                     style={val.id === currentStyle ? { ...Openstyle } : { ...Closestyle }}
        //                     initial={{ scale: 0, translateX: 0, opacity: 0 }}
        //                     whileInView={{
        //                         transformOrigin: "bottom",
        //                         scale: 1,
        //                         opacity: 2,
        //                         // translateX: -300
        //                     }}
        //                     onClick={() => setcurrentStyle(val.id)}
        //                     // whileTap={{
        //                     //     width: 500,
        //                     //     height: 400,
        //                     //     background: "gray",
        //                     //     cursor: 'pointer'
        //                     // }}
        //                     // onMouseEnter={() => setcurrentStyle(val.id)}
        //                     viewport={{ once: true }}
        //                     // whileHover={val.id === currentStyle ? { scaleX: 2 } : { scaleX: 1 }}
        //                     transition={{
        //                         duration: 3,
        //                         ease: 'easeInOut'
        //                     }}
        //                 >

        //                     <MyImage src={val.image} style={{ height: "100%", width: "100%" }} alt={`${val.id}`} />

        //                 </motion.div>
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white ">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover"
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                    typeof="video/mp4" autoPlay muted loop> </video>
            </div>
            <div className="video-content space-y-2 z-10">
                <h1 className="font-light text-6xl">full Hero Video</h1>
                <h3 className="font-light text-3xl">with TailwindCSS</h3>
            </div>
        </section>
    );
};

export default MiddleBox;
