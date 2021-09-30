import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    inner_container: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#f2f2f2',
    },
    row: {
        flexDirection: 'row',
    },
    name: {
        fontSize: 22,
        fontWeight: '700',
        color: '#37474f',
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#ef5350',
    },
    location: {
        fontSize: 16,
        fontWeight: '700',
    },
    level: {
        fontSize: 16,
        fontWeight: '700',
    },
    pTitle: {
        marginTop: 20,
        fontSize: 22,
        fontWeight: '700',
        color: '#37474f',
    },
    alignCenter: {
        justifyContent: 'center',
    },
    detail: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#ffffff',
    },
    detailText: {
        color: '#37474f',
        textAlign: 'justify',
    }
});