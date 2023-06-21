import { View } from "react-native"
import TextView from "../../../shared/ui/TextView"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

interface FactionResultProps extends StepProps {

}

const FactionResult = ({
    step,
    onChangeStep
}: FactionResultProps) => {
    return (
        <View style={{
            gap: 15,
            alignItems: 'flex-end'
        }}>
            <TextView 
                text={'This is your assigned <Faction> Machine Elf who will aide you in your mission as a Galaxer'}
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

export default FactionResult