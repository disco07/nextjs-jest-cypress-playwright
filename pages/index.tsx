import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fields from "../components/Fields";
import Button from "../components/Button";
import {useState} from "react";

const Home: NextPage = () => {
    const [value, setValue] = useState({
        number1: 0,
        number2: 0,
    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setValue({...value, [name]: value})
    }

    const onSubmit = () => {
        console.log(value)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.main}>
                <Fields type="number" placeholder="Enter a number" name="number1" value={value.number1}
                        handleChange={handleChange}/>
                <Fields type="number" placeholder="Enter a number" name="number2" value={value.number2}
                        handleChange={handleChange}/>
                <Button onClick={onSubmit}>Addition</Button>
            </div>
        </div>
    )
}

export default Home
