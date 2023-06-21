import React, { useState } from 'react'
import { LogBox } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './app/store'

import { StatusBar } from 'expo-status-bar';
import RootNavigator from './app/navigation';
import { ThemeContext } from './app/Theme';

export default function App() {
  LogBox.ignoreAllLogs();
  const [theme, changeTheme] = useState('dark')

  const onChangeTheme = (themeMode?: string) => {
    if(themeMode) {
      changeTheme(themeMode)
      return
    }

    changeTheme(theme == 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <Provider store={store}>
        <ThemeContext.Provider
          value={{
            theme,
            onChangeTheme: (themeMode?: string) => { onChangeTheme(themeMode) }
          }}
        >
          <RootNavigator />
          <StatusBar style="auto" />
        </ThemeContext.Provider>
      </Provider>
    </>
  );
}