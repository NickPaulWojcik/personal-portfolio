import { describe, expect, it, vi } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '../test-utils.jsx'
import { TopNav } from './TopNav.jsx'

describe('TopNav', () => {
  it('renders the site title and a Resume button', () => {
    renderWithProviders(<TopNav navOpened={false} onToggleNav={() => {}} />)

    expect(screen.getByText('Nick Wojcik')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Resume' })).toBeInTheDocument()
  })

  it('calls onToggleNav when the burger is clicked', () => {
    const onToggleNav = vi.fn()
    renderWithProviders(<TopNav navOpened={false} onToggleNav={onToggleNav} />)

    fireEvent.click(screen.getByRole('button', { name: /open navigation/i }))

    expect(onToggleNav).toHaveBeenCalledTimes(1)
  })
})
