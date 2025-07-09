import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screens/Home';

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppRoutes;