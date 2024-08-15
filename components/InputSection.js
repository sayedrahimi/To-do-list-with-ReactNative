import React from "react";
import { View, KeyboardAvoidingView, TouchableOpacity, Text, behavior, placeholder, Platform, StyleSheet, TextInput  } from "react-native";

export default function InputSection(){
    return(
        <View>
            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios"? 'padding': 'height'}
            style={styles.writeTaskWarper}>
                <TextInput style={styles.inputText} placeholder='write task' />
                <TouchableOpacity>
                <View style={styles.addWarper}>
                    <Text style={styles.addText}>+</Text>
                </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    writeTaskWarper: {
        position: 'absolute',
        top: 320,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        padding: 10,
        backgroundColor: 'white',
        width: 250,
        borderRadius: 30,
        paddingLeft: 30
    },
    addWarper: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center'
    },
    addText: {
        alignSelf: 'center',
        fontSize: 18
    }

})