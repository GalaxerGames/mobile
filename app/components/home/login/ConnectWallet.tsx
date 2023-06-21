import { Dimensions, View } from "react-native"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

const width = Dimensions.get('window').width

interface LoginFormProps extends StepProps {

}

const ConnectWallet = ({
    step,
    onChangeStep
}: LoginFormProps) => (
    <View style={{
        width: width * 0.8,
        gap: 30,
        alignItems: 'flex-end'
    }}>
        <Button 
            label='Connect Wallet'
            width={width * 0.8}
            py={10}
            onClick={() => onChangeStep((step || 0) + 1)}
        />
    </View>
)

export default ConnectWallet