import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'

const ListItem = props => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItemContainer}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  listItemContainer: {
    width: '100%',
    padding: 10, 
    backgroundColor: '#EEEEEE',
    marginTop: 10
  }
})

export default ListItem