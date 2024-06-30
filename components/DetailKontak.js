import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

const DetailKontak = ({ route, navigation }) => {
  const { image, nama, telepon, email } = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={[styles.title, styles.title]}>{nama}</Text>
      <View style={styles.teleponContainer}>
        <Text style={styles.telp}>{telepon}</Text>
        <View style={styles.iconContainer}>
          <Feather name="phone" size={20} color="black" style={styles.icon} />
          <AntDesign name="message1" size={20} color="black" style={styles.icon} />
        </View>
      </View>
      <Text style={[styles.label, styles.withBorder]}>ponsel</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={[styles.label, styles.withBorder]}>email</Text>
     <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  
  title: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: -15,
  },

  teleponContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  icon: {
    marginLeft: 20,
  },
  
  email: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
    marginBottom: 10,
  },

  label: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'gray',
    marginTop: -10,
    marginBottom: 20,
  },

  withBorder: {
    alignItems:'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  button: {
    backgroundColor: 'navy', 
    padding: 6,
    borderRadius: 4,
    marginTop: -10,
    alignSelf: 'center',
  },

  buttonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  
});

export default DetailKontak;
