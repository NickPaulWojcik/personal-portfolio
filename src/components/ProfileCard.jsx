import { Avatar, Stack, Text } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'
import { githubColors } from '../theme.js'

export function ProfileCard({ name, title, company, yearsOfExperience, avatarUrl }) {
  return (
    <Stack align="center" gap="xs">
      <Avatar src={avatarUrl} size={200} radius="50%" color="gray">
        <IconUser size={110} stroke={1.5} />
      </Avatar>
      <Text fw={700} size="2.5rem" ta="center">
        {name}
      </Text>
      <Text size="xl" c={githubColors.textSecondary} ta="center">
        {title}
      </Text>
      <Text size="xl" c={githubColors.textSecondary} ta="center">
        {company}
      </Text>
      <Text size="lg" c={githubColors.textSecondary} ta="center">
        {yearsOfExperience} years of experience
      </Text>
    </Stack>
  )
}
