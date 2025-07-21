import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import AuthProvider from './src/contexts/AuthContext';
import OrcamentoProvider from './src/contexts/OrcamentoContext';
import { ConfirmProvider } from './src/Components/ConfirmModalContext';
import ReciboProvider from './src/contexts/ReciboContext';


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <AuthProvider>
        <OrcamentoProvider>
          <ReciboProvider>
            <ConfirmProvider>
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
              <Routes />
            </ConfirmProvider>
          </ReciboProvider>
        </OrcamentoProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;