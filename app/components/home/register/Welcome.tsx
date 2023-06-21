import { View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"

interface WelcomeProps extends StepProps {

}

const Welcome = ({
    step,
    onChangeStep
}: WelcomeProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end'
        }}>
            <TextView 
                text={'Welcome <username> this protective gear will give you great strength in the war to come'}
            />
        </View>
    )
}

export default Welcome