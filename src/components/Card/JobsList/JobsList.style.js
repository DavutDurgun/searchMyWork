import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#00000044',
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        margin: 0
    },
    name: {
        fontSize: 17,
        fontWeight: '700',
    },
    type: {
        color: '#000',
        fontSize: 13,
        fontWeight: '300'
    },
    location: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: '700',
        backgroundColor: '#ef5350',
        borderRadius: 50,
        color: '#ffffff'
    },
    level:{
        fontSize: 15,
        fontWeight: '700',
        color: '#ef5350'
    },
    alignRight:{
        alignItems: 'flex-end'
    }
    
});