import {
    TextInput,
    Keyboard
} from 'react-native'
import { withTheme } from '../../../Theme'
import { themes } from '../../../contants/colors'
import { ScreenProps } from '../../../types/interfaces'
import { useEffect, useRef } from 'react'

interface TextAreaProps extends ScreenProps {
    value?: string
    onChangeText?: (value: string) => void
    placeholder?: string
    style?: any
    editable?: boolean
}

const TextArea = ({
    theme,
    value,
    placeholder,
    onChangeText,
    style,
    editable
}: TextAreaProps) => {
    const textAreaRef = useRef<any>()

    useEffect(() => {
        if(!editable) textAreaRef.current.blur()
    }, [editable])

    return (
        <TextInput
            ref={textAreaRef}
            numberOfLines={5}
            multiline={true}
            {...( value && {
                value
            })}
            {...( editable  && onChangeText && {
                onChangeText
            })}
            placeholder={placeholder}
            showSoftInputOnFocus={editable}
            placeholderTextColor={theme == 'light' ? 'gray' : themes.global.neutral100}
            style={[{
                width: '100%',
                backgroundColor: theme == 'light' ? themes.global.neutral100 : themes.global.neutral500,
                borderColor: theme == 'light' ? themes.global.neutral300 : themes.global.transaprent,
                borderWidth: 2,
                borderRadius: 10,
                color: theme == 'light' ? 'black' : themes.global.neutral100,
                padding: 10
            }, style || {} ]}
            editable={editable}
        />
    )
}

export default withTheme(TextArea)