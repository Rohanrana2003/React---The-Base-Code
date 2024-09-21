import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Contact from "../Contact";


describe('Contact Page Test cases', () => {

    test('Should load component in UI', () => {

        render(<Contact />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    })

    test('Should load button in UI', () => {

        render(<Contact />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })

    test('Should load all Input in UI', () => {

        render(<Contact />);
        const allInputs = screen.getAllByRole('textbox');
        expect(allInputs.length).toBe(2);
    })
})

