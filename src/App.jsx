import { Center } from '@mantine/core'
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
    <Center h="100vh" style={{ backgroundColor: githubColors.pageBg }}>
      <ProfileCard {...profile} />
    </Center>
  )
}

export default App
