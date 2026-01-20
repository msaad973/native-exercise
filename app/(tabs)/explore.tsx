import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const explore = () => {
  return (
    <View>
      <Text style={styles.container}>Welcome to explore</Text>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    color: 'white',
  },
})