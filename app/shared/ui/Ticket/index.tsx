import { TouchableOpacity, View, Text } from "react-native"
import { withTheme } from "../../../Theme"
import { ScreenProps } from "../../../types/interfaces"
import { themes } from "../../../contants/colors"

interface TicketProps extends ScreenProps {
    onClick?: () => void
    label: string
    startAdornment?: React.ReactNode
}

const Ticket = ({
    theme,
    onClick,
    startAdornment,
    label
}: TicketProps) => {
    return (
        <TouchableOpacity
            style={{
                alignSelf: 'center',
                width: '100%'
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                borderRadius: 40,
                backgroundColor: theme == 'light' ? themes.global.neutral100 : themes.global.neutral600,
                padding: 10,
            }}>
                {startAdornment && <View>
                    {startAdornment}
                </View>}
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: theme == 'light' ? themes.global.neutral700 : themes.global.neutral100
                }}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default withTheme(Ticket)