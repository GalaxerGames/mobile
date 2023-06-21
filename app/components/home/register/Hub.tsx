import { View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

interface HubProps extends StepProps {

}

const Hub = ({
    step,
    onChangeStep
}: HubProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end',
        }}>
            <TextView 
                text={'Now that you’ve picked a side. \nLets Hub your location and turn on some other permissions you’ll need to be a Galaxer.'}
            />
            <Button
                label={'Hub'}
                width={150}
                py={5}
                onClick={() => onChangeStep((step || 0)+1)}
            />
        </View>
    )
}

export default Hub