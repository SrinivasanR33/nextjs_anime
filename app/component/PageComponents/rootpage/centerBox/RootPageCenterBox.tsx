"use client"
// CenterBox.tsx
import styles from './styles.module.css';
import { motion } from "framer-motion";
const CenterBox: React.FC = () => {


    return (
        <div className={styles.container}>
            <motion.div
                style={{ width: 200, height: 200 ,background:"gray"}}
                initial={{ scale: 0 ,rotate:0}}
                animate={{
                    rotate: "180deg",
                    scale:2
                }}
                transition={{
                    duration: 1,
                    ease: 'backIn'
                    
                }}
            >
                Box 1
            </motion.div>
            <div className={`${styles.box} ${styles.box2}`}>
                Box 2
            </div>
        </div>
    );
};

export default CenterBox;
