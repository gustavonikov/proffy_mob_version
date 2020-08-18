import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 30, // diego colocou 40, mas no meu fica pequeno dms

    },

    banner: {
        width: '100%',
        resizeMode: 'contain',
        top: 10,
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsWrapper: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 80,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    imgStudy: {
        marginRight: 5,
        bottom: 3,
    },

    imgTeach: {
        marginRight: 5,
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#84d361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2FF',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 240,
        marginTop: 40,
    },

});

export default styles;
