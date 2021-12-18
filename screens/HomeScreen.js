import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { getUsers } from "../redux/actions"
import { FlatList } from 'react-native';

const HomeScreen = () => {
  const { users } = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(getUsers())
    }, 300000)
  })

  return (
    <View style={styles.appWrapper}>
      <Text style={styles.appTitle}>Mobile App Listing</Text>
      <FlatList 
        style={styles.listStyling}
        contentContainerStyle={{ paddingBottom: 100 }}
        data={users}
        renderItem={({item})=> (
          <View style={styles.wrapperInfo}>
            <Text style={styles.owner}>{item.owner.login}</Text>
            <Text style={styles.created}>{item.created_at.split(/T(.+)/)[0]}</Text>
          </View>
        )}
        // keyExtractor={(item, index) => index.toString}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  appWrapper: {
    paddingTop: 34,
  },
  appTitle: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  listStyling: {
    padding: 15,
  },
  wrapperInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    top: 10,
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  },
  owner: {
    
  },
  created: {
    
  }
})

export default HomeScreen
