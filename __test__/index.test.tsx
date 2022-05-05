import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import Button from "../components/Button";
import Fields from "../components/Fields";

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const addition = screen.getByText('Addition')
        const multiplication = screen.getByText('Multiplication')
        const division = screen.getByText('Division')
        const result = screen.getByText('Resultat: 0')
        const firstNumber = screen.getByPlaceholderText("Enter a first number")
        const secondNumber = screen.getByPlaceholderText("Enter a second number")
        fireEvent.change(firstNumber, {target: {value: '23'}})
        fireEvent.change(secondNumber, {target: {value: '25'}})
        fireEvent.click(screen.getByText("Addition"))

        expect(addition).toBeInTheDocument()
        expect(multiplication).toBeInTheDocument()
        expect(division).toBeInTheDocument()
        // @ts-ignore
        expect(firstNumber.value).toBe("23")
        // @ts-ignore
        expect(secondNumber.value).toBe("25")
        expect(result.innerHTML).toBe("Resultat: 48")
    })

    it('should calculate operation', () => {
        const handleChange = jest.fn((e) => {})
        const onSubmit = jest.fn((e) => {
            let result: number = 0;
            if (e.target.innerHTML === "Addition") {
                // @ts-ignore
                result = firstNumber.value + secondNumber.value
            } else if (e.target.innerHTML === "Multiplication") {
                // @ts-ignore
                result = firstNumber.value * secondNumber.value
            } else if (e.target.innerHTML === "Division") {
                // @ts-ignore
                result = firstNumber.value / secondNumber.value
            }
            return result;
        })

        render(<Fields type="number" placeholder="Enter a first number" name="number1" value={0}
                       handleChange={handleChange} />)
        render(<Fields type="number" placeholder="Enter a second number" name="2" value={0}
                       handleChange={handleChange} />)
        render(<Button onClick={onSubmit}>Addition</Button>)
        const firstNumber = screen.getByPlaceholderText("Enter a first number")
        const secondNumber = screen.getByPlaceholderText("Enter a second number")

        fireEvent.change(firstNumber, {target: {value: '3'}})
        fireEvent.change(secondNumber, {target: {value: '5'}})
        fireEvent.click(screen.getByText("Addition"))
        expect(onSubmit).toHaveBeenCalledTimes(1)
    });
})