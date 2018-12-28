import React from 'react'
import { View, Text, StyleSheet, Modal, Button, Image } from 'react-native'

const PlaceDetail = props => {
  let modalContent = null
  if (props.selectedPlace) {
    alert(props.selectedPlace.img)
    modalContent = (
      <View>
        <Image source={props.selectedPlace.img} style={styles.modalImage}/>
        <Text>{props.selectedPlace.name}</Text>
      </View>
    )
  }
  return (
    <Modal visible={props.modalStatus} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Borrar" color="red" onPress={props.onItemDeleted}/>
          <Button title="Cerrar" onPress={props.onModalClosed}/>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20
  },
  modalImage: {
    width: '100%',
    height: 100
  }
})

export default PlaceDetail
