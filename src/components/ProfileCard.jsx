import { Avatar, Stack, Text } from '@mantine/core'
import { IconUser } from '@tabler/icons-react'
import { githubColors } from '../theme.js'

export function ProfileCard({ name, title, company, yearsOfExperience, avatarUrl }) {
  return (
    <Stack
      align="center"
      gap={4}
      py="lg"
      px="md"
      style={{ borderBottom: `1px solid ${githubColors.border}` }}
    >
      <Avatar src={avatarUrl} size={72} radius="50%" color="gray">
        <IconUser size={40} stroke={1.5} />
      </Avatar>
      <Text fw={600} size="md" ta="center">
        {name}
      </Text>
      <Text size="sm" c={githubColors.textSecondary} ta="center">
        {title}
      </Text>
      <Text size="sm" c={githubColors.textSecondary} ta="center">
        {company}
      </Text>
      <Text size="xs" c={githubColors.textSecondary} ta="center">
        {yearsOfExperience} years of experience
      </Text>
    </Stack>
  )
}
