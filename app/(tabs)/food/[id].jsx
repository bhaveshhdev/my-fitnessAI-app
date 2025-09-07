import { useSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function FoodDetail() {
  const { id } = useSearchParams();
  const food = useSelector(state =>
    state.foods.all.find(item => item.id === id)
  );

  if (!food) {
    return (
      <View style={styles.center}>
        <Text>Food not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{food.name}</Text>
      <Text style={styles.label}>Calories: {food.calories}</Text>
      <Text style={styles.label}>Protein: {food.protein_g} g</Text>
      <Text style={styles.label}>Fat: {food.fat_g} g</Text>
      <Text style={styles.label}>Carbs: {food.carbs_g} g</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  label: { fontSize: 16, marginBottom: 8 },
});
