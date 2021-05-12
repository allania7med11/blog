import React, { FC } from 'react';
import { useParams } from 'react-router-dom'
import styles from '../assets/css/btn.module.css';
const { btn } = styles
const Lectures: FC = () => {
    const { id } = useParams<{ id: string }>()
    return (
        <button className={`${btn} bg-blue-500`}>Lectures-{id}</button>)
}
export default Lectures