import { Dimensions, View } from "react-native"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"
import Input from "../../../shared/ui/Input"

const width = Dimensions.get('window').width

interface TFAFormProps extends StepProps {

}

const TFAForm = ({
    step,
    onChangeStep
}: TFAFormProps) => (
    <View style={{
        width: width * 0.8,
        gap: 30,
        alignItems: 'flex-end'
    }}>
        <Input 
            placeholder={'2FA Code'}
        />
        <Button 
            label='Verify'
            width={150}
            py={5}
            onClick={() => onChangeStep((step || 0) + 1)}
        />
    </View>
)

export default TFAForm