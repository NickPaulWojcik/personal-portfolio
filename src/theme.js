import { createTheme } from '@mantine/core'

// GitHub-inspired grey palette
export const githubColors = {
  headerBg: '#24292f',
  headerText: '#f0f6fc',
  pageBg: '#f6f8fa',
  panelBg: '#ffffff',
  border: '#d0d7de',
  textPrimary: '#1f2328',
  textSecondary: '#57606a',
}

export const theme = createTheme({
  primaryColor: 'gray',
  defaultRadius: 'md',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
})
