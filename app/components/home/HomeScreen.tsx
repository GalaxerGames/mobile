import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { withTheme } from '../../Theme'
import { ScreenProps } from '../../types/interfaces'
import Layout from '../layout'
import { Text } from 'react-native'
import { themes } from '../../contants/colors'
import Buttons from './Buttons'
import { useState } from 'react'
import RegisterForm from './register/RegisterForm'
import EmailVerification from './register/EmailVerification'
import TFAStart from './register/TFAStart'
import TFAVerify from './register/TFAVerify'
import TFAConfirmation from './register/TFAConfirmation'
import WalletConnection from './register/WalletConnection'
import ConnectConfirm from './register/ConnectConfirm'
import FactionStart from './register/FactionStart'
import FactionSelect from './register/FactionSelect'
import FactionResult from './register/FactionResult'
import Hub from './register/Hub'
import RegisterFinal from './register/RegisterFinal'
import Welcome from './register/Welcome'
import LoginForm from './login/LoginForm'
import TFAForm from './login/TFAForm'
import ConnectWallet from './login/ConnectWallet'
import LoginWelcome from './login/LoginWelcome'

const logoImg = require('../../assets/logo.png')
const characterImg = require('../../assets/character.png')

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

interface HomeScreenProps extends ScreenProps {

}

const styles = StyleSheet.create({
    
})

const HomeScreen = ({
    theme
}: HomeScreenProps) => {
    const [step, setStep] = useState(0)
    const [option, setOption] = useState(0)

    const onChangeStep = (value: number) => {
        setStep(value)
    }

    return (
        <Layout type='base'>
            <View style={{
                justifyContent: 'space-between',
                paddingTop: 70,
                paddingBottom: 50,
                alignItems: 'center',
                gap: step == 13 ?  20 : 150
            }}>
                <View style={{
                    gap: !step ? 40 : 0,
                    alignItems: 'center'
                }}>
                    <Image source={logoImg} style={{
                        width: 170,
                        height: 337
                    }}/>
                    {!step && <Text style={{
                        color: themes.global.yellow,
                        textTransform: 'uppercase',
                        fontSize: 18,
                    }}>Welcome galaxer</Text> }
                    {step == 13 && option == 0 && <Image 
                        source={characterImg}
                        style={{
                            width: width * 0.8,
                            height: width * 0.8 / 1241 * 1167
                        }}
                    />}
                </View>
                {step == 0 && <Buttons 
                    step={step}
                    onChangeStep={onChangeStep}
                    changeOption={(value: number) => setOption(value)}
                /> }
                {
                    option == 0 && <>
                        
                        {step == 1 && <RegisterForm 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 2 &&  <EmailVerification 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 3 && <TFAStart 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 4 && <TFAVerify
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 5 && <TFAConfirmation 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 6 && <WalletConnection 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 7 && <ConnectConfirm 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 8 && <FactionStart
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 9 && <FactionSelect 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 10 && <FactionResult 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 11 && <Hub 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 12 && <RegisterFinal 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 13 && <Welcome 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                    </>
                }
                {
                    option == 1 && <>
                        {step == 1 && <LoginForm 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 2 && <TFAForm 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 3 && <ConnectWallet 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                        {step == 4 && <LoginWelcome 
                            step={step}
                            onChangeStep={onChangeStep}
                        />}
                    </>
                }
            </View>
        </Layout>
    )
}

export default withTheme(HomeScreen)