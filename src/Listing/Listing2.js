import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CircleList from 'react-native-circle-list';

const Listing2 = () => {
  _keyExtractor = item => item.id;

  _renderItem = ({item}) => (
    <View
      style={{
        height: (Dimensions.get('window').height / 100) * 8,
        justifyContent: 'center',
        alignItems: 'center',
        width: (Dimensions.get('window').height / 100) * 8,
        backgroundColor: 'white',
        borderRadius: 100,
      }}>
      <Text style={{color: 'black'}}>{item.name}</Text>
    </View>
  );
  const [data, setData] = useState([
    {id: 0, value: 'C1CD2F', name: 'Football'},
    {id: 1, value: '360EF5', name: 'Salsa'},
    {id: 2, value: '51BB75', name: 'Chess'},
    {id: 3, value: '340A57', name: 'Snooker'},
    {id: 4, value: '99E11F', name: 'Dancing'},
    {id: 5, value: '937F07', name: 'Coding'},
    {id: 6, value: 'A341B9', name: 'Dating'},
    {id: 7, value: 'BC8BFB', name: 'Making'},
    {id: 8, value: 'ADC304', name: 'Cars Show'},
    {id: 9, value: '4496C2', name: 'Race'},
    {id: 10, value: 'A0B2BC', name: 'Cooking'},
    {id: 11, value: 'DC4460', name: 'Riding'},
    {id: 12, value: 'E391CA', name: 'Cinema'},
    {id: 13, value: '707500', name: 'Dancing'},
    {id: 14, value: 'ADA323', name: 'Football'},
    {id: 15, value: 'D18572', name: 'Coding'},
    {id: 16, value: 'A341B9', name: 'Fitness'},
  ]);
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'red'}}>
        <CircleList
          data={data}
          swipeSpeedMultiplier={40}
          visiblityPadding={100}
          selectedItemScale={1}
          elementCount={15}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Listing2;

const styles = StyleSheet.create({});
