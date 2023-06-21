import { FC } from "react";
import { ILayout, ScreenProps } from "../../types/interfaces";
import { 
    Dimensions,
    SafeAreaView, 
    ScrollView,
    View
} from "react-native";
import { withTheme } from "../../Theme";
import { themes } from "../../contants/colors";

interface BaseLayoutProps extends ILayout, ScreenProps {

}

const BaseLayout: FC<BaseLayoutProps> = ({
    theme,
    children
}) => {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{
                    width: width,
                    minHeight: height,
                    backgroundColor: theme == 'light' 
                        ? 'white' 
                        : themes.global.background,
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: width * 0.8,
                        alignItems: 'center',
                    }}>
                        {children}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default withTheme(BaseLayout)