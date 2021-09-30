import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 8,
        margin: 10,
        backgroundColor: '#ef5350',
        borderRadius: 5,
        alignItems: 'center',
    },
    inner_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#fff'
    },
    loading: {
        color: '#fff',
    }
});
