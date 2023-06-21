import { View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

interface FactionStartProps extends StepProps {

}

const FactionStart = ({
    step,
    onChangeStep
}: FactionStartProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end'
        }}>
            <TextView 
                text={'Next You will Choose Your Faction. \nThere are three to choose from read about them ahead.'}
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

export default FactionStart