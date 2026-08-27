import { Stack } from '@mantine/core'
import {
  IconUserCircle,
  IconBriefcase,
  IconCode,
  IconTools,
  IconMail,
} from '@tabler/icons-react'
import { NavLink } from '@mantine/core'
import { ProfileCard } from './ProfileCard.jsx'

const menuItems = [
  { label: 'About', icon: IconUserCircle },
  { label: 'Experience', icon: IconBriefcase },
  { label: 'Projects', icon: IconCode },
  { label: 'Skills', icon: IconTools },
  { label: 'Contact', icon: IconMail },
]

export function SideNav({ profile }) {
  return (
    <nav aria-label="Primary">
      <ProfileCard {...profile} />
      <Stack gap={0} p="xs">
        {menuItems.map(({ label, icon: Icon }) => (
          <NavLink
            key={label}
            label={label}
            leftSection={<Icon size={18} stroke={1.5} />}
            href="#"
          />
        ))}
      </Stack>
    </nav>
  )
}
