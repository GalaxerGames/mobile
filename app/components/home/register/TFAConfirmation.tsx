import { View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

interface TFAConfirmationProps extends StepProps {

}

const TFAConfirmation = ({
    step,
    onChangeStep
}: TFAConfirmationProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end'
        }}>
            <TextView 
                text={'Secured! You can reset this in the settings at anytime'}
            />
            <Button
                label={'Next'}
                width={150}
                py={5}
                onClick={() => onChangeStep((step || 0)+1)}
            />
        </View>
    )
}

export default TFAConfirmation