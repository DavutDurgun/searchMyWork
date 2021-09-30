import React from 'react'
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

//styles
import styles from './Loading.style';


const Loading = () => {
    return (
        <View style={styles.container} >
            <LottieView  style={styles.lottie}  source={require('../../assets/img/loading.json')} autoPlay />
        </View>
    );
}

export default Loading;