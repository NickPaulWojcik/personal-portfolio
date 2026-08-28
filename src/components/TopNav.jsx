import { Button, Group, Text } from '@mantine/core'
import { githubColors } from '../theme.js'

export function TopNav() {
  return (
    <Group h="100%" px="md" justify="space-between">
      <Text fw={700} c={githubColors.textPrimary}>
        Nick Wojcik
      </Text>
      <Button ml="auto" variant="filled" color="gray">
        Resume
      </Button>
    </Group>
  )
}
