import { Dimensions, View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

const width = Dimensions.get('window').width

interface FactionSelectProps extends StepProps {

}

const FactionSelect = ({
    step,
    onChangeStep
}: FactionSelectProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end',
            width: width * 0.8
        }}>
            <TextView 
                text={'Stats about the Droch'}
            />
            <Button
                label={'Vow'}
                width={150}
                py={5}
                onClick={() => onChangeStep((step || 0)+1)}
            />
        </View>
    )
}

export default FactionSelect