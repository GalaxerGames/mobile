import { View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

interface TFAStartProps extends StepProps {

}

const TFAStart = ({
    step,
    onChangeStep
}: TFAStartProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end'
        }}>
            <TextView 
                text={'Set Up 2fa to secure your account.\nWe reccomend Google Auth'}
            />
            <Button
                label={'Start'}
                width={150}
                py={5}
                onClick={() => onChangeStep((step || 0)+1)}
            />
        </View>
    )
}

export default TFAStart