import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../Screens/SignIn";

const LoginStack = createNativeStackNavigator();

const LoginRoutes = () => {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false
                }}
            />
        </LoginStack.Navigator>
    )
}

export default LoginRoutes;