import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.detail}>Course: {course}</Text>
        <Text style={styles.detail}>
          Units Enrolled: {units}
        </Text>
      </View>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DCE3EA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172554',
    marginBottom: 6,
  },
  detail: {
    fontSize: 14,
    color: '#475569',
    marginTop: 3,
  },
  fullLoad: {
    backgroundColor: '#DCFCE7',
    color: '#166534',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 'bold',
    overflow: 'hidden',
    marginLeft: 8,
  },
});