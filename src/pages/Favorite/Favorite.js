import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';


//style
import styles from './Favorite.style';

const Favorite = () => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Favorite</Text>
            </View>
        </SafeAreaView>
    );
}

export default Favorite;