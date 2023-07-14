import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View >
    <ScrollView horizontal={true} style={[styles.container]}>
    <View style={[styles.card,styles.cardElevated]}>
      <Text >TAP</Text>
    </View>
    <View  style={[styles.card,styles.cardElevated]}>
      <Text>TAP</Text>
    </View>
    <View style={[styles.card,styles.cardElevated]}>
      <Text >TAP</Text>
    </View>
    <View style={[styles.card,styles.cardElevated]}>
      <Text >TAP</Text>
    </View>
    <View style={[styles.card,styles.cardElevated]}>
      <Text >TAP</Text>
    </View>
    </ScrollView>
    </View>
  
  )
}
 
const styles = StyleSheet.create({
  headingTexts:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8 
},
container:{
  flex:1,
  flexDirection:'row',
  padding:8,
},
card:{
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  width:100,
  margin:8,
  height:100,
  borderRadius:15,

},
cardElevated:{
  backgroundColor:'red',
  elevation:50,
  shadowOffset:{
    width:1,
    height:1
  },
  shadowColor:'#228b22',
  shadowOpacity:0.4,
}
})