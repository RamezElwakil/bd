import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import TestComponent from '../components/TestComponent'

describe('TestComponent', () => {
  it('renders component title', () => {
    render(<TestComponent />)
    expect(screen.getByText('Component Test')).toBeInTheDocument()
  })

  it('shows initial items', () => {
    render(<TestComponent />)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('toggles content visibility', () => {
    render(<TestComponent />)
    
    // Initially visible
    expect(screen.getByText('Dynamic Content')).toBeInTheDocument()
    expect(screen.getByText('Content is visible')).toBeInTheDocument()
    
    // Click to hide
    const toggleButton = screen.getByText('Hide Content')
    fireEvent.click(toggleButton)
    
    expect(screen.getByText('Show Content')).toBeInTheDocument()
    expect(screen.getByText('Content is hidden')).toBeInTheDocument()
    expect(screen.queryByText('Dynamic Content')).not.toBeInTheDocument()
  })

  it('adds new items to the list', () => {
    render(<TestComponent />)
    
    const addButton = screen.getByText('Add Item')
    fireEvent.click(addButton)
    
    expect(screen.getByText('Item 4')).toBeInTheDocument()
    
    fireEvent.click(addButton)
    expect(screen.getByText('Item 5')).toBeInTheDocument()
  })

  it('removes items from the list', () => {
    render(<TestComponent />)
    
    const removeButtons = screen.getAllByText('Remove')
    fireEvent.click(removeButtons[0]) // Remove first item
    
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('renders list management section', () => {
    render(<TestComponent />)
    expect(screen.getByText('List Management')).toBeInTheDocument()
  })
}) 