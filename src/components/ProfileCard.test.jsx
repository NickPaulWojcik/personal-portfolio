import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../test-utils.jsx'
import { ProfileCard } from './ProfileCard.jsx'

describe('ProfileCard', () => {
  it('renders the name, title, company, and years of experience', () => {
    renderWithProviders(
      <ProfileCard
        name="Nick Wojcik"
        title="Software Engineer"
        company="Company Name"
        yearsOfExperience={5}
      />,
    )

    expect(screen.getByText('Nick Wojcik')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Company Name')).toBeInTheDocument()
    expect(screen.getByText('5 years of experience')).toBeInTheDocument()
  })
})
