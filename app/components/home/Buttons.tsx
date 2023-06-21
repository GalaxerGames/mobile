import { Button } from '../../shared/ui/Button'
import { View, Dimensions } from 'react-native'
import { StepProps } from './types'
const width = Dimensions.get('window').width

interface ButtonsProps extends StepProps {
    changeOption: (value: number) => void
}

const Buttons = ({
    step,
    onChangeStep,
    changeOption
}: ButtonsProps) => (
    <View style={{
        gap: 20
    }}>
        <Button 
            label={'sign up'}
            style={{
                textTransform: 'uppercase'
            }}
            width={width * 0.8}
            py={10}
            onClick={() => {
                onChangeStep((step || 0) + 1)
                changeOption(0)
            }}
        />
        <Button 
            label={'login'}
            style={{
                textTransform: 'uppercase'
            }}
            width={width * 0.8}
            py={10}
            onClick={() => {
                onChangeStep((step || 0) + 1)
                changeOption(1)
            }}
        />
    </View>
)

export default Buttons