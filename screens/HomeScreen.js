import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getUsers } from "../redux/actions"
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

const marginBottomItem = 20;
const paddingItem = 10;
const imgHeight = 100;
const sizeOfItem = imgHeight + paddingItem * 2 + marginBottomItem;

const backgroundImg = 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=8'


const App = () => {
  const { users } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState(false);

  const Yscroll = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUsers())
    },6000)
  }, [dispatch])

  const renderUser = ({ item, index }) => {
    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2)
      ],
      outputRange: [1, 1, 1, 0]
    })
    return (
      <Animated.View style={
        [styles.item,
        {
          transform: [{ scale }]
        }
        ]
      }>
        <Image
          style={styles.image}
          source={{uri: `${item.owner.avatar_url}`}}
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
        />
        <View style={styles.wrapText}>
          <Text style={styles.fontSize}>{item.owner.login}</Text>
          <Text style={styles.created}>{item.created_at.split(/T(.+)/)[0]}</Text>
        </View>
        {/* <Image
          style={styles.image}
          source={{uri: `${item.anime_img}`}}
          resizeMode='contain'
          contentContainerStyle={{ padding: 20 }}
        />
        <View style={styles.wrapText}>
          <Text style={styles.fontSize}>{item.anime_name}</Text>
          <Text style={styles.created}>{item.anime_id}</Text>
        </View> */}
      </Animated.View>
    )

  }


  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: backgroundImg }}
        style={StyleSheet.absoluteFillObject}
      />
      <View>
        <Text testID="myText" style={styles.title}>Mobile App Listing</Text>
      </View>
      {
        isLoading ? <ActivityIndicator /> : (
          <Animated.FlatList
            // data={users.data}
            data={users}
            keyExtractor={item => `key-${item.id}`}
            renderItem={renderUser}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={{
              padding: 20
            }}
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                { useNativeDriver: true }
              )}
          />
        )
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontSize: {
    fontSize: 18
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    display: 'flex',
    flexDirection: 'row',
    textAlign: "center",
    padding: 10,
    color: "white",
  },
  created: {
    color: "gray",
  },
  image: {
    width: 100,
    borderRadius: 100,
    // width: 100,
    // borderRadius: 50,
    height: imgHeight
  },
  wrapText: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  item: {
    flexDirection: 'row',
    marginBottom: marginBottomItem,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: .3,
    shadowRadius: 30,
    padding: paddingItem
  },
  container: {
    flex: 1,
    top: "5%",
  }

});

export default App;