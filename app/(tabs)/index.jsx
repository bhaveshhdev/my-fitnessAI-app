import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FoodCard from '../../components/FoodCard';
import { searchFoods } from '../../slice/foodsSlice';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const foods = useSelector(state => state.foods.filtered);
    const [query, setQuery] = useState('');

    const handleSearch = (text) => {
        setQuery(text);
        dispatch(searchFoods(text));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search food..."
                value={query}
                onChangeText={handleSearch}
            />
            <FlatList
                data={foods}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <FoodCard food={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: '#fff' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 8,
        marginBottom: 12
    },
});
