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

        expect(addition).toBeInTheDocument()
        expect(multiplication).toBeInTheDocument()
        expect(division).toBeInTheDocument()
    })
})