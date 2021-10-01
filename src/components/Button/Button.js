import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

//style
import styles from './Button.style';

//icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';


const Button = ({ text, onPress, loading, isFavorite: fav, isVisibleIcon }) => {
    const [isFavorite, setIsFavorite] = useState(fav)

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { onPress(); }}
            disabled={loading}
        >
            {loading ?
                <ActivityIndicator color='white' style={styles.loading} />
                :
                <View style={styles.inner_container}>
                    {isVisibleIcon &&
                        <MaterialCommunityIcons
                            name="favorite"
                            size={25}
                            color={isFavorite ? 'red' : "white"}
                        />
                    }
                    <Text style={styles.title}>
                        {text}
                    </Text>
                </View>
            }
        </TouchableOpacity>
    );


};

export default Button;