import React from 'react'

interface ThemeProps {
  theme: string
  onChangeTheme?: (themeMode: string) => void
}

export const ThemeContext = React.createContext<Partial<ThemeProps> | null>({ theme: 'dark' })

export function withTheme(Component: any) {
  const ThemedComponent = (props: any) => (
    <ThemeContext.Consumer>
      {contexts => <Component {...props} {...contexts} />}
    </ThemeContext.Consumer>
  )
  return ThemedComponent
}

export const useTheme = () => React.useContext(ThemeContext)
