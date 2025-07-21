import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Header = ({ title }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.buttonBack}
            >
                <Icon name='arrow-left' size={40} color={'#121212'} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header;