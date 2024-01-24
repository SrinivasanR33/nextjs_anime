"use client"
// CenterBox.tsx
import styles from './styles.module.css';
import { motion } from "framer-motion";
const CenterBox: React.FC = () => {


    return (
        <div className={`${styles.container}`}>
            <div className='flex lg:flex-row justify-between md:flex-col '>
                <div className=''>
                    <motion.div
                        style={{ width: 500, height: 400, background: "gray", }}
                        initial={{ scale: 0, translateX: 0 }}
                        whileInView={{
                            transformOrigin: "left",
                            scale: 1,

                            translateX: 300
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut'
                        }}
                    >
                        Box 1
                    </motion.div>
                </div>
                <div className='flex items-center'>

                    <motion.div
                        style={{ width: 500, height: 200 }}
                        initial={{ scale: 0, translateX: 0 }}
                        whileInView={{
                            transformOrigin: "left",
                            scale: 1,
                            opacity: 2,
                            translateX: -300
                        }}
                        viewport={{ once: true }}
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
            </div>
        </div>
    );
};

export default CenterBox;
