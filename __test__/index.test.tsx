import React from 'react';
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const addition = screen.getByText('Addition')
        const multiplication = screen.getByText('Multiplication')
        const division = screen.getByText('Division')
        const input = screen.getByPlaceholderText("Enter a number")

        expect(addition).toBeInTheDocument()
        expect(multiplication).toBeInTheDocument()
        expect(division).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    it('should calculate operation', () => {
        render(<Home />)


    });
})