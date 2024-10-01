import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card'; // Importing Card component

const ProductList = () => {
  const [products, setProducts] = useState([]); // State to hold product data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Fetching data from API
        const data = await response.json();
        setProducts(data); // Set product data in state
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        // console.error('Error fetching products:', error);
        setLoading(false); // Stop loading in case of error
      }
    };

    fetchProducts(); // Fetch products on component mount
  }, []); // The empty dependency array ensures the fetch runs only once when the component mounts

  // Conditional rendering for loading state
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // Rendering product cards with FlatList once data is loaded
  return (
    
   <>
   <Text style={{textAlign:"center", fontSize:30, color:"#3A6D8C"}}>Products </Text>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()} // Unique key for each item
      renderItem={({ item }) => (
        <Card 
          title={item.title}          // Passing props to Card component
          price={item.price}
          description={item.description}
          image={item.image}
        />
      )}
    />
   </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    marginTop:50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProductList;
