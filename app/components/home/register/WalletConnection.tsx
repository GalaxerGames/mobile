import { View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

interface WalletConnectionProps extends StepProps {

}

const WalletConnection = ({
    step,
    onChangeStep
}: WalletConnectionProps) => {
    return (
        <View style={{
            gap: 20,
            alignItems: 'center'
        }}>
            <TextView 
                text={'Galaxer Uses Web3 for incentives and gameplay enhancements. \nPlease connect to the Polygon network with your wallet.'}
            />
            <Button
                label={'Connect'}
                width={150}
                py={5}
                onClick={() => onChangeStep((step || 0)+1)}
            />
        </View>
    )
}

export default WalletConnection