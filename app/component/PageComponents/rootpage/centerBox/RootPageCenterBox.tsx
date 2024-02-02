"use client"
// CenterBox.tsx
import styles from './styles.module.css';
import { motion } from "framer-motion";
const CenterBox: React.FC = () => {


    return (
        <div className={`${styles.container}`}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="lg:w-1/2 lg:h-[500px] h-[100px] w-1/4 sm:h-[300px] sm:w-1/3  rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* <div className='flex lg:flex-row justify-center md:flex-col '>
                <div className='flex flex-1 items-center justify-end'>
                    <motion.div
                        style={{ width: 500, height: 400, background: "gray", }}
                        initial={{ scale: 0, rotate:0 }}
                        
                        whileInView={{
                            transformOrigin: "left",
                            scale: 1,
                           
                        }}
                        whileHover={{
                           
                            
                        }}
                        // viewport={{ once: true }}
                        transition={{
                            duration: 2,
                            ease: 'easeInOut',
                            
                        }}
                    >
                        Box 1
                    </motion.div>
                </div>
                <div className='flex flex-1 items-center justify-end'>

                    <motion.div
                        style={{ width: 500, height: 200 }}
                        initial={{ scale: 0, translateX: 0 }}
                        whileInView={{
                            transformOrigin: "left",
                            scale: 1,
                            opacity: 2,
                        }}
                        // viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut'
                        }}
                    >
                        Box 1 ghsn sdignhlsdkg asdfgoasfgnhialse vgalikjfgalk svlaksnvoiaaslv asoivnasoliklsdlvk asoivnasoliklsdlvkasnvvsdav
                        vasdvsdough oihsldkvnsd oaiskvflasdvn vsoiav nsoas in oasdvknsa oas o oi osidnhsdjlzkvnzsdl sdsdv sdzv
                        sdvsdzvzdvhuidvjkz uivbjsdkv dikjbvdv mdvdcv
                    </motion.div>
                </div>
            </div> */}
        </div>
    );
};

export default CenterBox;
