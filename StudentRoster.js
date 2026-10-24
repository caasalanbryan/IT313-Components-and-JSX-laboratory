import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import StudentCard from './StudentCard';

export default function StudentRoster() {
  const [students, setStudents] = useState([
    {
      id: 's1',
      name: 'Ana Cruz',
      course: 'IT313',
      units: 21,
      isFullLoad: true,
    },
    {
      id: 's2',
      name: 'Bea Santos',
      course: 'IT313',
      units: 15,
      isFullLoad: false,
    },
    {
      id: 's3',
      name: 'Cid Ramos',
      course: 'IT313',
      units: 18,
      isFullLoad: true,
    },
    {
      id: 's4',
      name: 'Dex Alonzo',
      course: 'IT313',
      units: 12,
      isFullLoad: false,
    },
  ]);

  const [useIndexKey, setUseIndexKey] = useState(false);

  const reverseRoster = () => {
    setStudents((currentStudents) =>
      [...currentStudents].reverse()
    );
  };

  const toggleKeyExperiment = () => {
    setUseIndexKey((currentValue) => !currentValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IT313 Student Roster</Text>

      <Text style={styles.subtitle}>
        {`Total Students: ${students.length}`}
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={reverseRoster}
        >
          <Text style={styles.buttonText}>Reverse Roster</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            useIndexKey && styles.warningButton,
          ]}
          onPress={toggleKeyExperiment}
        >
          <Text style={styles.buttonText}>
            {useIndexKey ? 'Restore ID Keys' : 'Test Index Keys'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.keyStatus}>
        Key mode: {useIndexKey ? 'Array Index' : 'Student ID'}
      </Text>

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
      >
        {students.map((student, index) => (
          <StudentCard
            key={useIndexKey ? index : student.id}
            name={student.name}
            course={student.course}
            units={student.units}
            isFullLoad={student.isFullLoad}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#172554',
  },
  subtitle: {
    fontSize: 16,
    color: '#64748B',
    marginTop: 8,
    marginBottom: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  button: {
    flex: 1,
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  warningButton: {
    backgroundColor: '#B45309',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
  keyStatus: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 12,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
  },
});