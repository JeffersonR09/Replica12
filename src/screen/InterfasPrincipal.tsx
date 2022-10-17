import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BodyView from '../components/BodyView'
import { AntDesign } from '@expo/vector-icons';

export default function InterfasPrincipal() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FFF' barStyle={'dark-content'}/>
      <View style={styles.header}>
        <AntDesign style={styles.arrowleft} name="arrowleft" size={24} color="black" />
        <Text style={styles.textHeader}>Work Exprience</Text>
        <AntDesign style={styles.delete} name="delete" size={24} color="red" />
      </View>
      <BodyView/>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.bottonSave}>
          <Text style={styles.textSave}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',

  },
  header:{
    flexDirection:'row',
  },
  arrowleft:{
    margin:'5%',
  },
  textHeader:{
    margin: '5%',
    marginLeft: '0%',
    fontSize: 18,
    fontWeight: 'bold',
  },
  delete:{
    margin: '5%',
    right: '0%',
    position: 'absolute',
  },
  footer:{
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  bottonSave:{
    margin: '3%',
    height: '45%',
    width: '40%',
    backgroundColor: '#2060E3',
    borderRadius: 15,
    justifyContent: 'center',
    
  },
  textSave:{
    color: "#fff",
    justifyContent: 'center',
    textAlign: 'center', 
  },
})