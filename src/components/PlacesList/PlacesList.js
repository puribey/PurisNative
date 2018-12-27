import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import ListItem from '../ListItem/ListItem'

const PlacesList = props => {
  return (
    <FlatList
      style={styles.placesListContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.img}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  placesListContainer: {
    width: '100%'
  }
})

export default PlacesList
