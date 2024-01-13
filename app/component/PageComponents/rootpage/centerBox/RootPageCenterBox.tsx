"use client"
// CenterBox.tsx
import styles from './styles.module.css';
import { motion } from "framer-motion";
const CenterBox: React.FC = () => {


    return (
        <div className={`${styles.container}`}>
            <div className='flex justify-start'>
                <motion.div
                    style={{ width: 500, height: 300, background: "gray", }}
                    initial={{ scale: 0, opacity: 0, translateX: 0 }}
                    whileInView={{
                        transformOrigin: "left",
                        scale: 1,
                        opacity: 2,
                        translateX: 400
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut'
                    }}
                >
                    Box 1
                </motion.div>
            </div>
            <div className='flex justify-end'>
                <motion.div
                    style={{ width: 200, height: 300, }}
                    initial={{ scale: 0, opacity: 0, translateX: 0 }}
                    whileInView={{
                        transformOrigin: "left",
                        scale: 1,
                        opacity: 2,
                        translateX: -400
                    }}
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
    );
};

export default CenterBox;
