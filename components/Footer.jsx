import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        <Text style={styles.footerText}>© 2024 MyApp</Text>
        <TouchableOpacity onPress={() => alert('Navigating to Terms and Conditions')}>
          <Text style={styles.footerLink}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Navigating to Privacy Policy')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#333', // Background color for footer
    padding: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 20,
  },
  footerLink: {
    color: '#61dafb',
    fontSize: 14,
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
});

export default Footer;
