import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FoodCard({ food }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{food.name}</Text>
      <Text>Calories: {food.calories}</Text>
      <Text>Protein: {food.protein_g}g</Text>
      <Text>Fat: {food.fat_g}g</Text>
      <Text>Carbs: {food.carbs_g}g</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    elevation: 2,
  },
  name: { fontWeight: 'bold', fontSize: 16 },
});
