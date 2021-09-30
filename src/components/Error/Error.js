import React from 'react'
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

//styles
import styles from './Error.style';


const Error = () => {
    return (
        <View style={styles.container} >
            <LottieView  style={styles.lottie}  source={require('../../assets/img/error.json')} autoPlay />
        </View>
    );
}

export default Error;