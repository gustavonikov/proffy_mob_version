/* eslint-disable camelcase */
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../../components/PageHeader';
import TeacherItem, { Teacher } from '../../../components/TeacherItem';
import styles from './styles';
import api from '../../../services/api';
import { useFocusEffect } from '@react-navigation/native';

function ListTeacher() {
    const [teachers, setTeachers] = useState([]);
    const [showSearchBox, setShowSearchBox] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then((response) => {
            if (response) {
                const favoredTeachers = JSON.parse(response);
                const favoredTeachersIds = favoredTeachers.map((teacher: Teacher) => teacher.id);
                setFavorites(favoredTeachersIds);
            }
        });
    }

    useFocusEffect(() => { loadFavorites(); });

    function handleShowSearchBox() {
        setShowSearchBox(!showSearchBox);
    }

    async function handleSearchSubmit() {
        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            },
        });
        setShowSearchBox(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.wrapper}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleShowSearchBox}>
                        <MaterialCommunityIcons name="account-search-outline" size={35} color="#fff" />
                    </BorderlessButton>
                )}
            >
                { showSearchBox && (
                    <View style={styles.searchForm}>
                        <View>
                            <Text style={styles.label}>Matéria</Text>
                            <TextInput
                                style={styles.input}
                                value={subject}
                                onChangeText={(text) => setSubject(text)}
                                placeholder="Qual a matéria?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={(text) => setWeekDay(text)}
                                    placeholder="Em que dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={(text) => setTime(text)}
                                    placeholder="Em qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton onPress={handleSearchSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Buscar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 14, // 16
                }}
            >
                {teachers.map((teacher: Teacher) => (
                    <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favored={favorites.includes(teacher.id)}
                    />
                ))}

            </ScrollView>
        </View>

    );
}

export default ListTeacher;
