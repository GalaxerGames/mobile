import { Dimensions, View } from "react-native"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"
import Input from "../../../shared/ui/Input"

const width = Dimensions.get('window').width

interface LoginWelcomeProps extends StepProps {

}

const LoginWelcome = ({
    step,
    onChangeStep
}: LoginWelcomeProps) => (
    <View style={{
        width: width * 0.8,
        gap: 10,
        alignItems: 'center'
    }}>
        <Button 
            label='GLXR Balance'
            width={width * 0.8}
            py={10}
        />
        <Button 
            label='NEBULAE Balnce'
            width={width * 0.8}
            py={10}
        />
        <Button 
            label='Machine Eif Balance'
            width={width * 0.8}
            py={10}
        />
        <Button 
            label='Menu'
            width={150}
            py={5}
        />
    </View>
)

export default LoginWelcome