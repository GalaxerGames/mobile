import { Button } from "../../../shared/ui/Button"
import { StepProps } from "../types"
import TextView from "../../../shared/ui/TextView"
import { View } from "react-native"

interface EmailVerification extends StepProps {

}

const EmailVerification = ({
    step,
    onChangeStep
}: EmailVerification) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end'
        }}>
            <TextView 
                text={'We have sent an email to the address you put in your sign up. \nPlease verify your email to continue.'}
            />
            <Button
                label={'Verify'}
                width={150}
                py={5}
                onClick={() => onChangeStep((step || 0)+1)}
            />
        </View>
    )
}

export default EmailVerification