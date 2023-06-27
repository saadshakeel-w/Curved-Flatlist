import {
  Animated,
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Listing = () => {
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
  const numItemsToShow = 5;
  const ITEM_SIZE = (Dimensions.get('window').width / 100) * 20;
  const SPACE_ITEM_SIZE = hp(20);
  const PROFILE_ITEM_SIZE = (hp(92) - ITEM_SIZE) / 2;
  const CONTACTS_ITEM_SIZE = (hp(65) - ITEM_SIZE) / 2;

  const scrollY = useRef(new Animated.Value(0)).current;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const renderItem = ({item, index}) => {
    const inputRange2 = [
      (index - 5) * ITEM_SIZE,
      (index - 4) * ITEM_SIZE,
      (index - 3) * ITEM_SIZE,
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
      (index + 1) * ITEM_SIZE,
      (index + 2) * ITEM_SIZE,
      (index + 3) * ITEM_SIZE,
    ];
    const inputRange = [
      (index - 5) * ITEM_SIZE,
      (index - 4) * ITEM_SIZE,
      (index - 3) * ITEM_SIZE,
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
    ];
    const translateX = scrollY.interpolate({
      inputRange: inputRange2,
      outputRange: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [-100, -40, 0, 40, 0],
    });
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 1, 1],
    });
    if (!item.value) {
      // return <View style={{height: SPACE_ITEM_SIZE}} />;
    } else {
      return (
        <Animated.View
          key="image0"
          style={[
            styles.image,
            {
              width: ITEM_SIZE,
              height: wp('20%'),
              transform: [{translateX}, {scale}, {translateY}],
              justifyContent: 'center',
              // marginRight: wp('10%'),
              alignItems: 'center',
              borderRadius: wp('17%'),
              backgroundColor: `#${item.value}`,
            },
          ]}>
          {/* <Pressable
            onPress={() => props.navigation.navigate('SendInvite')}
            style={[
              styles.circle,
              {
                width: wp('10%'),
                height: wp('10%'),
                borderWidth: 0,

                borderRadius: wp('17%'),
                backgroundColor: `blue`,
                // width: wp('10%'),
                // height: wp('10%'),
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}> */}
          <Text style={[styles.text]}>{item.name}</Text>
          {/* <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: wp(2),
              }}> */}
          {/* <Text style={[styles.text]}>{index}</Text> */}
          {/* <Feather
                style={{marginLeft: wp(1)}}
                name="user-plus"
                size={18}
                color="#fff"
              /> */}
          {/* </View> */}
          {/* </Pressable> */}
        </Animated.View>
      );
    }
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Animated.FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{alignItems: 'center'}}
        // snapToInterval={ITEM_SIZE}
        decelerationRate={0.4}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollY}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default Listing;
