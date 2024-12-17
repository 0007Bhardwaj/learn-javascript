import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const App = () => {
  // constants
  const BackButton = `<<`;
  const URL =
    'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=188b7917-3908-11ef-bec7-0afcc0dadc5f&productName=&categoryName=beverages&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=40&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&accessKey=7af34809-f88b-11ed-9487-0212aae905fe';
  // usestates
  const [apiResponse, setApiResponse] = useState([]);

  async function fetchApiData() {
    const response = await axios.get(URL);
    if (response?.status == 200) {
      setApiResponse(response.data?.object);
    } else {
      console.log(`Error while fetching data`, response);
    }
  }

  useEffect(() => {
    fetchApiData();
    return () => {};
  }, []);

  function Header() {
    return (
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{BackButton}</Text>
          <Text
            style={[
              styles.text,
              {paddingLeft: 14, fontSize: 18, fontWeight: '500'},
            ]}>
            Dry Fruits & Cereals{' '}
          </Text>
        </View>
        <Text style={styles.text}>{'Search'}</Text>
      </View>
    );
  }

  const GridItem = ({item, index}) => {
    return (
      <View style={[styles.gridItem, {padding: 8, alignItems: 'center'}]}>
        <Image src={item?.mediaUrl} style={{height: 100, width: 100}} />
        <Text
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '600',
            paddingTop: 4,
          }}
          numberOfLines={2}>
          {item?.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 12,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: '#000',
              paddingRight: 20,
            }}>
            $80
          </Text>
          {index % 2 == 0 ? (
            <View
              style={{
                height: 30,
                width: 80,
                backgroundColor: 'green',
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 8,
              }}>
              <Text style={{color: '#FFF', fontSize: 14, fontWeight: '600'}}>
                -
              </Text>
              <Text style={{color: '#FFF', fontSize: 14, fontWeight: '600'}}>
                {index}
              </Text>
              <Text style={{color: '#FFF', fontSize: 14, fontWeight: '600'}}>
                +
              </Text>
            </View>
          ) : (
            <View
              style={{
                height: 30,
                width: 80,
                borderWidth: 1,
                borderColor: 'green',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'green', fontSize: 14, fontWeight: '600'}}>
                ADD
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <FlatList
          data={apiResponse}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={GridItem}
          scrollEnabled
          contentContainerStyle={{flexGrow: 1, paddingBottom:40}}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
  },
  text: {
    color: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:8
  },
  textStyling: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'black',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  gridItem: {
    flex: 1,
    margin: 5,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
});
