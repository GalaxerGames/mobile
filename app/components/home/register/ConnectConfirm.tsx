import { Dimensions, View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

const width = Dimensions.get('window').width

interface ConnectConfirmProps extends StepProps {

}

const ConnectConfirm = ({
    step,
    onChangeStep
}: ConnectConfirmProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end',
            width: width * 0.8
        }}>
            <TextView 
                text={'Connected'}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
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

export default ConnectConfirm