import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        padding: 40,
        backgroundColor: '#8257e5',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 23, // 24
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 23,
    },
});

export default styles;
