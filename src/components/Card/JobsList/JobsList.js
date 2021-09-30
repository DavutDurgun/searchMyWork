import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './JobsList.style';

const JobsList = ({ name, location, level, type, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <View style={styles.row}>
                <Text style={styles.name}>{name}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.type}>{type}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.location}>{location}</Text>
            </View>

            <View style={styles.row, styles.alignRight}>
                <Text style={[styles.level]}>{level}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default JobsList;