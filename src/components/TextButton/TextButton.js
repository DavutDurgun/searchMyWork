import React from 'react';
import { TouchableOpacity, Text, } from 'react-native';

//icons
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

//styles
import styles from './TextButton.style'

const TextButton = ({ onPress, icon, iconColor, iconSize, title }) => {

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <MaterialIcons
                name={icon}
                size={iconSize}
                color={iconColor}
            />
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default TextButton;