export interface ModalProps {
    open: boolean,
    handleClose: () => void
}

export interface ScreenProps {
    theme: 'light' | 'dark'
    onChangeTheme: (themeMode?: string) => void
}

import { ReactNode } from 'react'

export interface ILayout {
  children: ReactNode
}
