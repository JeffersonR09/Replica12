import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function CompInput() {
  return (
    <View style={styles.viewInput}>
      <TextInput style={styles.selectInput} placeholder='hola'/>
      <AntDesign name="caretdown" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    selectInput:{
        height:'100%',
        width: '35%',
        backgroundColor: '#FAFAFA',
        color: '#AAAAAB',
        borderRadius: 20,
    },
    viewInput:{
        flexDirection:'row',
    },
})