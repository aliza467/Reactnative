import React from 'react';




import Navbar from './components/Navbar';
import ProductList from './Screens/Productlist';
import { ScrollView, View } from 'react-native';
import Footer from './components/Footer';


export default function App() {
  return (
    <View>
<Navbar/>
<ProductList/>
<Footer/>
    </View>
  );
}
