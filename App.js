import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import PlacesInput from './src/components/PlacesInput/PlacesInput'
import PlacesList from './src/components/PlacesList/PlacesList'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
})

type Props = {}
export default class App extends Component<Props> {
  state = {
    places: []
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

  onItemDeleted = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key
        })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlacesInput onSubmitPlace={this.onSubmitPlace} />
        <PlacesList
          places={this.state.places}
          onItemDeleted={this.onItemDeleted}
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
