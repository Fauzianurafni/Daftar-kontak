import React, { useState } from 'react';
import { View, SectionList, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Kontak from './Kontak';

const kontak = [
  { nama: 'Ages Gelar Pangestu', telepon: '0857-2476-8850', email: 'ages@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Gibran Genta Rabbani', telepon: '0813-8292-9054', email: 'gibran@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M Farel Abdilah', telepon: '0877-0135-9915', email: 'farel@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Fajar Budiman', telepon: '0822-4148-1428', email: 'fajar@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Moh Abdi Hafidz', telepon: '0857-3214-6196', email: 'abdi@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Rizky Maulana Yusuf', telepon: '0821-1314-1867', email: 'rizky@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Eri Zulfan Diwani', telepon: '0857-9576-9727', email: 'zulfan@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Silvy Denia Putri', telepon: '0856-9495-6417', email: 'silvy@gmail.com', image: require('../assets/cewe.jpeg') },
  { nama: 'Raka Wahyu Sagara', telepon: '0812-1985-2211', email: 'raka@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Nur Insan Subekti', telepon: '0813-1674-2795', email: 'insan@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Fauzia Nurafni', telepon: '0895-8092-45080', email: 'fauzia@gmail.com', image: require('../assets/cewe.jpeg') },
  { nama: 'Hanif Imam Muntazhar', telepon: '0838-9444-3344', email: 'hanif@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Asri Nurkholidah', telepon: '0857-2155-2296', email: 'asri@gmail.com', image: require('../assets/cewe.jpeg') },
  { nama: 'Restu Gede Purnama', telepon: '0813-8337-2981', email: 'restu@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Maulana Ifnu syafi', telepon: '0815-6389-0525', email: 'ifnu@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Nadia Putri Rahmawati', telepon: '0812-8117-2165', email: 'nadiae@gmail.com', image: require('../assets/cewe.jpeg') },
  { nama: 'Rafdy Fauzan Ilham F', telepon: '0851-7421-0937', email: 'rafdy@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M Fadlan Syuhada', telepon: '0838-9302-6231', email: 'fadlan@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Arip', telepon: '0898-0520-407', email: 'arip@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Arya Pangestu', telepon: '0813-1770-6229', email: 'arya@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M Samani Kamil', telepon: '0857-9430-6200', email: 'samani@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Luthfi Fauzan Ahmad', telepon: '0858-6235-4347', email: 'luthfi@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Syalwa Fida Wifa', telepon: '08123-456-7890', email: 'syalwa@gmail.com', image: require('../assets/cewe.jpeg') },
  { nama: 'Feri Irawan', telepon: '0857-9390-2926', email: 'feri@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M.Arizki', telepon: '0895-4059-44337', email: 'arizkie@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Moh.Rizki Maulana', telepon: '0813-9992-1489', email: 'rizki@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M Utama Luhur Budhy', telepon: '0896-3046-1568', email: 'utama@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Reiza Maulidia Senjaya', telepon: '0813-1517-1380', email: 'reiza@gmail.com', image: require('../assets/cewe.jpeg') },
  { nama: 'Ferri Ekalaya', telepon: '0813-7868-2871', email: 'ferri@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Putri Aulia Maulida', telepon: '0852-1664-3396', email: 'putri@gmail.com', image: require('../assets/cewe.jpeg') },
  { nama: 'Carol Dwi Putra', telepon: '0813-1078-5303', email: 'carol@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M Fakhri Khairil I', telepon: '0822-5898-8952', email: 'fakhri@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Alma Sakhiragama K', telepon: '0823-7759-9015', email: 'alma@gmail.com', image: require('../assets/cewe.jpeg') },
  { nama: 'Nazmi Maulana Fauzan', telepon: '0852-1987-1636', email: 'nazmi@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M George Elmar', telepon: '0895-3605-39307', email: 'george@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M Sachran Almiqdad', telepon: '0857-2133-7825', email: 'sachran@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Dhiya Jauhar Akmal', telepon: '0878-0576-1574', email: 'akmal@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'M Faisal Rafli', telepon: '0877-0364-7543', email: 'faisal@gmail.com', image: require('../assets/cowo.jpeg') },
  { nama: 'Fino Falentino', telepon: '0857-9880-6252', email: 'fino@gmail.com', image: require('../assets/cowo.jpeg') },
];

const Daftarkontak = ({ navigation }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePress = (item) => {
    setSelectedContact(item);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const sortedKontak = kontak.sort((a, b) => a.nama.localeCompare(b.nama));

  const filteredKontakList = sortedKontak.filter((item) =>
    item.nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dataByFirstLetter = filteredKontakList.reduce((acc, item) => {
    const firstLetter = item.nama.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(item);
    return acc;
  }, {});

  const sections = Object.keys(dataByFirstLetter).sort().map((letter) => ({
    title: letter,
    data: dataByFirstLetter[letter],
  }));

  const renderItem = ({ item }) => (
    <TouchableOpacity key={`${item.nama}-${item.telepon}`} onPress={() => handlePress(item)}>
      <View style={styles.itemContainer}>
        <Kontak gambar={item.image} judul={item.nama} />
        {selectedContact === item && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DetailKontak', { ...item })}
          >
            <Text style={styles.buttonText}>Lihat Detail</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={15} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Cari kontak..."
          onChangeText={handleSearch}
          value={searchQuery}
        />
      </View>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item.nama}-${index}`}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  itemContainer: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'navy',
    padding: 6,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
});

export default Daftarkontak;