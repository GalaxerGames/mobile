import { Dimensions, View } from "react-native"
import { StepProps } from "../types"
import { Button } from "../../../shared/ui/Button"

const width = Dimensions.get('window').width

interface TFAVerifyProps extends StepProps {

}

const TFAVerify = ({
    step,
    onChangeStep
}: TFAVerifyProps) => {
    return (
        <View style={{
            gap: 30,
            alignItems: 'flex-end'
        }}>
            <View style={{
                gap: 10
            }}>
                <Button
                    label={'Generated Secret'}
                    width={width * 0.8}
                    py={10}
                />
                <Button
                    label={'Auth Code Input'}
                    width={width * 0.8}
                    py={10}
                />
            </View>
            <Button
                label={'Verify'}
                width={150}
                py={5}
                onClick={() => onChangeStep((step || 0) + 1)}
            />
        </View>
    )
}

export default TFAVerify