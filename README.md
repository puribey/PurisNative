# Puris Native

This is my first approach to React Native

Through this app I'll be learning about RN components running on both Android and iOS simulators. 

Once created, add this scripts to **package.json**:
```
"scripts": {
    "ios": "react-native run-ios",
    "android": "react-native run-android"
}
```

## Android
**Simulator:**
* Download [Android Studio](https://developer.android.com/studio/)  
* Once installed and running you can go into Tools and look for the AVD Manager 
* Open project on the editor and run **npm run android** 
* Press command m to get menu

**On Device:**  
* Connect phone to computer
* Be sure USB debug is on
* Open project on the editor and run **npm run android** 
* Shake device to get menu


## iOS
**Simulator:**
* Download [Xcode](https://developer.apple.com/xcode/)  
* Open Xcode on your Mac
* Open project on the editor and run **npm run ios** 
* Press command d to get menu

**On Device:**  
* Connect phone to computer
* Open project on the editor and run **npm run android** 
* Shake device to get menu


## Styles

Css in RN is not really css.  
We create a class called StyleSheet and references inside style elements in our components.  
Styles in RN are like objects and they are called with CamelCase instead of using dashes.  
**Layout** in RN is mostly given by something similar to css flexbox.

```
render() {
    return (
      <View style={styles.container}></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 20
  },
})
```

## Touchable

Most of the RN components do not have onPress event within them.  
In order to touch an element inside RN most of the times the element need to be wrapped by a touchable component.  
There should always be no more than one element inside this touchable wrapper.

```
const ListItem = props => (
  <TouchableWithoutFeedback onPress={props.onItemPressed}>
    <View style={styles.listItemContainer}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableWithoutFeedback>
)
```
As we don't have pseudo classes here as in HTML, RN provides us with different components that will manage some visual tricks for us:  
* TouchableHighlight
* TouchableOpacity
* TouchableNativeFeedback (IMPORTANT! Only use in Android)

## Scroll
Not all RN element have the ability to scroll, that's why we can replace View with **ScrollView**. But this is not the best option for performance because it renders everything at once.  
```
const PlacesList = props => {
  return (
    <ScrollView style={styles.placesListContainer}>
      {props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)}/>
      ))}
    </ScrollView>
  )
}
```
A better way of doing this is by using **FlatList**. This RN component loads the elements only when they are rendered by the view. FlatList integrates data and render inside so map method is not used anymore and key is now used anymore either.
```
const PlacesList = props => {
  return (
    <FlatList
      style={styles.placesListContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.value}
          onItemPressed={() => props.onItemDeleted(info.item.key)}
        />
      )}
    />
  )
}
```
As key is now used anymore in the component it is necessary to pass a key element inside of the data object. Yes, is has to be an object.
```
onSubmitPlace = placeName => {
  this.setState(prevState => {
    return {
      places: prevState.places.concat({key: Math.random(), value: placeName})
    }
  })
}
```


