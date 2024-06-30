import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Kontak(props) {
  const { gambar, judul } = props; 

  return (
    <View style={styles.contactContainer}>
      <Image source={gambar} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{judul}</Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    height: 80,
    marginTop: -10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },

  textContainer: {
    justifyContent: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 18,
  },
  
  telp: {
    fontSize: 16,
  },
});
