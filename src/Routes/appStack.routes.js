import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screens/Home';
import GerarPdf from "../Screens/GerarPdf";
import Orcamento from "../Screens/Orcamento";
import Recibo from "../Screens/Recibo";
import GerarPdfRecibo from "../Screens/GerarPdfRecibo";

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
            <AppStack.Screen
                name="Orcamento"
                component={Orcamento}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen
                name='GerarPdf'
                component={GerarPdf}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen
                name='Recibo'
                component={Recibo}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen
                name='GerarPdfRecibo'
                component={GerarPdfRecibo}
                options={{
                    headerShown: false
                }}
            />
        </AppStack.Navigator>
    )
}

export default AppRoutes;