import React  from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";

export default function Tasks({children}){
    return(
        <View style={styles.item}>
            <View style={styles.leftItems}>
                <TouchableOpacity style={styles.squre}></TouchableOpacity>
                <Text style={styles.text}>{children}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftItems: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    squre:{
        height: 24,
        width: 24,
        backgroundColor: '#55BCF6',
        borderRadius: 3,
        marginRight: 10
    },
    text: {
        maxWidth: '80%'
    },
    circular:{
        height: 12,
        width: 12,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#55BCF6'
    }
})