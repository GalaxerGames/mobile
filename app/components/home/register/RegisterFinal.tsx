import { View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

interface RegisterFinalProps extends StepProps {

}

const RegisterFinal = ({
    step,
    onChangeStep
}: RegisterFinalProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'center',
        }}>
            <TextView 
                text={'Looks like you’re based in <city> which has <#> Galaxers and <#> in your faction! Ready to Play?'}
            />
            <Button
                label={'Hello Yea!'}
                width={150}
                py={5}
                onClick={() => onChangeStep((step || 0)+1)}
            />
        </View>
    )
}

export default RegisterFinal