import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import teachBgImg from '../../assets/images/give-classes-background.png';

function Teach() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.wrapper}>
            <ImageBackground resizeMode="contain" source={teachBgImg} style={styles.content}>
                <Text style={styles.title}> Quer ser um Proffy? </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web :D
                </Text>
            </ImageBackground>
            <View style={styles.buttonView}>
                <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                    <Text style={styles.okButtonText}> {/* Fazer ele direcionar para o app web */}
                        Ok, entendi
                    </Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Teach;
