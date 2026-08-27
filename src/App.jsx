import { AppShell } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { TopNav } from './components/TopNav.jsx'
import { SideNav } from './components/SideNav.jsx'
import { githubColors } from './theme.js'

const profile = {
  name: 'Nick Wojcik',
  title: 'Software Engineer',
  company: 'Company Name',
  yearsOfExperience: 5,
}

function App() {
  const [navOpened, { toggle: toggleNav }] = useDisclosure(false)

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !navOpened } }}
      styles={{ main: { backgroundColor: githubColors.pageBg } }}
    >
      <AppShell.Header>
        <TopNav navOpened={navOpened} onToggleNav={toggleNav} />
      </AppShell.Header>

      <AppShell.Navbar style={{ backgroundColor: githubColors.panelBg }}>
        <SideNav profile={profile} />
      </AppShell.Navbar>

      <AppShell.Main>{/* Page content goes here */}</AppShell.Main>
    </AppShell>
  )
}

export default App
