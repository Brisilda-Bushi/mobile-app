import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { getUsers } from "../redux/actions"
import { FlatList } from 'react-native';

const HomeScreen = () => {
  const { users } = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  console.log()

  useEffect(() => {
    dispatch(getUsers())
  })

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>Hello</Text>
      <FlatList 
        data={users}
        renderItem={({item})=> (
          <View style={styles.wrapper}>
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
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  owner: {
    
  },
  created: {

  }
})

export default HomeScreen
