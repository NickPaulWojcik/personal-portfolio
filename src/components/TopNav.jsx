import { Burger, Button, Group, Text } from '@mantine/core'
import { githubColors } from '../theme.js'

export function TopNav({ navOpened, onToggleNav }) {
  return (
    <Group
      h="100%"
      px="md"
      justify="space-between"
      style={{ backgroundColor: githubColors.headerBg }}
    >
      <Group gap="sm">
        <Burger
          opened={navOpened}
          onClick={onToggleNav}
          hiddenFrom="sm"
          size="sm"
          color={githubColors.headerText}
          aria-label={navOpened ? 'Close navigation' : 'Open navigation'}
        />
        <Text fw={700} c={githubColors.headerText}>
          Nick Wojcik
        </Text>
      </Group>
      <Button ml="auto" variant="filled" color="gray">
        Resume
      </Button>
    </Group>
  )
}
