import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React from 'react'
import CompInput from './CompInput'

export default function BodyView() {
  return (
    <ScrollView style={styles.body}>
        <Text>Job Title</Text>
        <Text>Comopany</Text>
        <View>
        <Text>From</Text>
        </View> 
        <View>
        <Text>To</Text>
        </View>
        <View>
        <Text>I currently work here</Text>
        </View>
        <Text>Description (Optional)</Text>
        <Text>Employment Type</Text>
        <Text>Location</Text>
        <Text>Job Level</Text>
        <Text>Job Function</Text>
        <Text>Salary (Optional)</Text>
        <View>
        <Text>Currency</Text>
        </View> 
        <View>
        <Text>Frequency</Text>
        </View> 
        <Text>Add Media (Optional)</Text>
        <CompInput/>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:'#fff',
        margin: '5%',
    },
})