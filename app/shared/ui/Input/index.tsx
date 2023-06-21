import { TextInput, View } from "react-native"
import { withTheme } from "../../../Theme"
import { ScreenProps } from "../../../types/interfaces"
import { themes } from "../../../contants/colors"

interface InputProps extends ScreenProps {
    value?: string
    onChangeText?: (value: string) => void
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
    placeholder?: string
    isSecured?: boolean
}

const Input = ({
    theme,
    isSecured = false,
    value,
    onChangeText,
    startAdornment,
    endAdornment,
    placeholder
}: InputProps) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: themes.global.yellow
        }}>
            {
                startAdornment && <View>
                    {startAdornment}
                </View>
            }
            <TextInput
                secureTextEntry={isSecured}
                style={{
                    flexGrow: 1,
                    color: 'black'
                }}
                {...(value && {
                    value
                })}
                {...(onChangeText && {
                    onChangeText
                })}
                placeholder={placeholder}
                placeholderTextColor={'black'}
            />
            {
                endAdornment && <View>
                    {endAdornment}
                </View>
            }
        </View>
    )
}

export default withTheme(Input)