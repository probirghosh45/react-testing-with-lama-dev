import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "./App"

test('renders react application link', () => {
     render(<App/>) 
     const linkElemment = screen.getByText(/React Application/i)
     expect(linkElemment).toBeInTheDocument()
    })
