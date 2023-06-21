import { Dimensions, View } from "react-native"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"
import Input from "../../../shared/ui/Input"

const width = Dimensions.get('window').width

interface LoginFormProps extends StepProps {

}

const LoginForm = ({
    step,
    onChangeStep
}: LoginFormProps) => (
    <View style={{
        width: width * 0.8,
        gap: 30,
        alignItems: 'flex-end'
    }}>
        <Input 
            placeholder={'Username / Email'}
        />
        <Input 
            placeholder={'Password'}
        />
        <Button 
            label='Next'
            width={150}
            py={5}
            onClick={() => onChangeStep((step || 0) + 1)}
        />
    </View>
)

export default LoginForm