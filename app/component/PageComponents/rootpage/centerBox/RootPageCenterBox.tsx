"use client"
// CenterBox.tsx
import styles from './styles.module.css';

const CenterBox: React.FC = () => {


    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles.box1}`}>
                Box 1
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
                Box 2
            </div>
        </div>
    );
};

export default CenterBox;
