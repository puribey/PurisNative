import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import PlacesInput from './src/components/PlacesInput/PlacesInput'
import PlacesList from './src/components/PlacesList/PlacesList'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {}
export default class App extends Component<Props> {
  state = {
    places: [],
    selectedPlace: null,
    modalStatus: false
  }
  changePlaceName = e => {
    this.setState({
      placeName: e
    })
  }
  onSubmitPlace = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          img: {
            uri: 'https://media.cntraveller.in/wp-content/uploads/2018/09/Tokyo-Shibuya-neon-lights-1366x768.jpg'
          }
        })
      }
    })
  }

  onItemSelected = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.filter(place => {
          return place.key === key
        }),
        modalStatus: true
      }
    })
  }

  onItemDeleted = () => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.filter(place => {
          return place.key === prevState.selectedPlace.key
        })
      }
    })
  }

  onModalClosed = () => {
    this.setState({
      modalStatus: !this.state.modalStatus
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.onItemDeleted} onModalClosed={this.onModalClosed} modalStatus={this.state.modalStatus}/>
        <PlacesInput onSubmitPlace={this.onSubmitPlace} />
        <PlacesList
          places={this.state.places}
          onItemSelected={this.onItemSelected}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20
  }
})
