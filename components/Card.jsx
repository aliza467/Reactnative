import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ title, price, description, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Text numberOfLines={2} style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    flexDirection: 'row',
    padding: 15,
    margin:5
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 10,
    
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default Card;
