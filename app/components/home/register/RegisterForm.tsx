import { Dimensions, View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"
import Input from "../../../shared/ui/Input"

const width = Dimensions.get('window').width

interface RegisterFormProps extends StepProps {

}

const RegisterForm = ({
    step,
    onChangeStep
}: RegisterFormProps) => (
    <View style={{
        width: width * 0.8,
        gap: 10,
        alignItems: 'flex-end'
    }}>
        <Input 
            placeholder={'Username'}
        />
        <Input 
            placeholder={'Email'}
        />
        <Input 
            placeholder={'Email Confirm'}
        />
        <Input 
            placeholder={'Password'}
        />
        <Input 
            placeholder={'Password Confirm'}
        />
        <Button 
            label='Next'
            width={150}
            py={5}
            onClick={() => onChangeStep((step || 0) + 1)}
        />
    </View>
)

export default RegisterForm