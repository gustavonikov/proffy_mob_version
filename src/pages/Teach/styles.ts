import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 30, // diego colocou 40, mas no meu fica pequeno dms

    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,

    },

    description: {
        marginTop: 24,
        color: '#D4C2FF',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },

    buttonView: {
        alignItems: 'center',
    },

    okButton: {
        marginVertical: 40,
        backgroundColor: '#04D361',
        width: 210,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 20, // 17
        fontFamily: 'Archivo_700Bold',
    },
});

export default styles;
