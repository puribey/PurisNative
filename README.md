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

----

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
---
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

---

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