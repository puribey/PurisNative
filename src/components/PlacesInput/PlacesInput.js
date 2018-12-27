import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

class PlacesInput extends Component {
  state = {
    placeName: ''
  }
  changePlaceName = e => {
    this.setState({
      placeName: e
    })
  }
  placesSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return
    }
    this.props.onSubmitPlace(this.state.placeName)
  }
  render() {
    return (
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        value={this.state.placeName}
        placeholder="Nombre de ciudad"
        onChangeText={this.changePlaceName}
      />
      <Button
        title="Agregar"
        style={styles.placeButton}
        onPress={this.placesSubmitHandler}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    height: 40,
    width: '70%',
    borderColor: '#555555',
    borderBottomWidth: 1
  },
  placeButton: {
    width: '30%'
  }
})

export default PlacesInput
