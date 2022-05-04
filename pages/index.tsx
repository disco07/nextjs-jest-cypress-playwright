import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fields from "../components/Fields";
import Button from "../components/Button";
import {BaseSyntheticEvent, useState} from "react";

const Home: NextPage = () => {
    const [values, setValues] = useState({
        number1: 0,
        number2: 0,
    });
    const [finalResult, setFinalResult] = useState(0)

    const handleChange = (e: BaseSyntheticEvent) => {
        const name = e.target.name;
        const value = parseFloat(e.target.value);
        setValues({...values, [name]: value})
    }

    const onSubmit = (e: BaseSyntheticEvent) => {
        let result: number = 0;
        if (e.target.innerHTML === "Addition") {
            result = values.number1 + values.number2
        } else if (e.target.innerHTML === "Multiplication") {
            result = values.number1 * values.number2
        } else if (e.target.innerHTML === "Division") {
            result = values.number1 / values.number2
        }
        setFinalResult(result)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className={styles.main}>
                <Fields type="number" placeholder="Enter a number" name="number1" value={values.number1}
                        handleChange={handleChange}/>
                <Fields type="number" placeholder="Enter a number" name="number2" value={values.number2}
                        handleChange={handleChange}/>
                <span>Resultat: <p className="result">{finalResult}</p></span>
                <Button onClick={onSubmit}>Addition</Button>
                <Button onClick={onSubmit}>Multiplication</Button>
                <Button onClick={onSubmit}>Division</Button>
            </div>
        </div>
    )
}

export default Home
