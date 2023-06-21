import { View, Switch, TouchableOpacity, Text } from 'react-native'
import { withTheme } from '../../../Theme'
import { ScreenProps } from '../../../types/interfaces'
import { themes } from '../../../contants/colors'

interface ToggleProps {
    value?: boolean
    onToggle: (value: boolean) => void
}

interface ButtonProps extends ScreenProps {
    onClick?: () => void
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
    label: string
    px: number
    py: number
    width?: number
    style?: any
    type: 'contained' | 'outlined'
    backgroundColor?: string
}

export const ToggleButton = withTheme(({
    value,
    onToggle
}: ToggleProps) => {
    return (
        <Switch
            value={value}
            onValueChange={onToggle}
        />
    )
})

export const Button = withTheme(({
    onClick,
    startAdornment,
    label,
    theme,
    px,
    py,
    width,
    style,
    type='contained',
    backgroundColor
}: ButtonProps) => (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: type == 'contained' ? (
                themes.global.yellow
            ) : 'transparent',
            paddingLeft: px,
            paddingRight: px,
            paddingTop: py,
            paddingBottom: py,
            width: width,
        }}
        {...(onClick && {
            onPress : onClick
        })}
    >
        {
            startAdornment && <View>
                {startAdornment}
            </View>
        }
        <Text style={[{
            color: 'black'
        }, style || {}]}>{label}</Text>
    </TouchableOpacity>
))