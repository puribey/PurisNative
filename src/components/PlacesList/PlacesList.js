import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ListItem from '../ListItem/ListItem'

const PlacesList = props => {
  return (
    <View style={styles.placesListContainer}>
      {props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPressed={() => alert(`Item pressed ${i}`)}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  placesListContainer: {
    width: '100%',
  }
})

export default PlacesList