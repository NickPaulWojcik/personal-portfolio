import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../test-utils.jsx'
import { SideNav } from './SideNav.jsx'

const profile = {
  name: 'Nick Wojcik',
  title: 'Software Engineer',
  company: 'Company Name',
  yearsOfExperience: 5,
}

describe('SideNav', () => {
  it('renders the profile section and all placeholder menu items', () => {
    renderWithProviders(<SideNav profile={profile} />)

    expect(screen.getByText('Nick Wojcik')).toBeInTheDocument()

    for (const label of ['About', 'Experience', 'Projects', 'Skills', 'Contact']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
