import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'

const ListItem = props => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItemContainer}>
      <Image style={styles.placeImage} source={props.placeImage}/>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  listItemContainer: {
    width: '100%',
    padding: 10, 
    backgroundColor: '#EEEEEE',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 50,
    width: '30%',
  }
})

export default ListItem