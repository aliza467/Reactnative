import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity>
        <Text style={styles.navItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.navItem}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.navItem}>Settings</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: 15,
  },
  navItem: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Navbar;