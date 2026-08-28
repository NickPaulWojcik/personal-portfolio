import { AppShell, Center } from '@mantine/core'
import { TopNav } from './components/TopNav.jsx'
import { ProfileCard } from './components/ProfileCard.jsx'
import { githubColors } from './theme.js'

const profile = {
  name: 'Nick Wojcik',
  title: 'Software Engineer II',
  company: 'Credit Acceptance, corp.',
  yearsOfExperience: 7,
  avatarUrl: '/profile.jpg',
}

function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      styles={{ main: { backgroundColor: githubColors.pageBg } }}
    >
      <AppShell.Header style={{ backgroundColor: 'transparent' }}>
        <TopNav />
      </AppShell.Header>

      <AppShell.Main>
        <Center h="calc(100vh - 60px)">
          <ProfileCard {...profile} />
        </Center>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
