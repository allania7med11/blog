import React, { FC } from 'react';
import styles from "../assets/css/btn.module.css"
const Home:FC = () => {
    return (<button className={`${styles.btn} bg-blue-500`}>Click Me</button>)
}
export default Home