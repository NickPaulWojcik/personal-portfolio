import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../test-utils.jsx'
import { TopNav } from './TopNav.jsx'

describe('TopNav', () => {
  it('renders the site title and a Resume button', () => {
    renderWithProviders(<TopNav />)

    expect(screen.getByText('Nick Wojcik')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Resume' })).toBeInTheDocument()
  })
})
