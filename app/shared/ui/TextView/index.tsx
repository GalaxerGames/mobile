import {
    View,
    Text
} from 'react-native'
import { withTheme } from '../../../Theme'
import { themes } from '../../../contants/colors'
import { ScreenProps } from '../../../types/interfaces'

interface TextAreaProps extends ScreenProps {
    text?: string
    style?: any
}

const TextView = ({
    theme,
    text,
    style
}: TextAreaProps) => {
    return (
        <View
            style={[{
                width: '100%',
                minHeight: 150,
                backgroundColor: themes.global.yellow,
                padding: 20,
                paddingBottom: 20
            }, style || {}]}
        >
            <Text style={[{
                color: 'black'
            }]}>{text}</Text>
        </View>
    )
}

export default withTheme(TextView)