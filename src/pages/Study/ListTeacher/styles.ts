import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#F0F0F7',
    },

    teacherList: {
        marginTop: -30,
    },

    searchForm: {
        marginBottom: 10,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    input: {
        height: 45,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 4,
        marginBottom: 8,
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    submitButton: {
        backgroundColor: '#04d361',
        height: 56,
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
    },

    submitButtonText: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 18,
    },

});

export default styles;
