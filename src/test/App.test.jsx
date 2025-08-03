import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByText('React + Tailwind CSS')).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(<App />)
    expect(screen.getByText(/Welcome to your new project/)).toBeInTheDocument()
  })

  it('displays counter with initial value of 0', () => {
    render(<App />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('increments counter when button is clicked', () => {
    render(<App />)
    const button = screen.getByText('Increment Counter')
    
    fireEvent.click(button)
    expect(screen.getByText('1')).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('renders color test section', () => {
    render(<App />)
    expect(screen.getByText('Tailwind CSS Test')).toBeInTheDocument()
    expect(screen.getByText('Red')).toBeInTheDocument()
    expect(screen.getByText('Green')).toBeInTheDocument()
    expect(screen.getByText('Blue')).toBeInTheDocument()
  })
}) 