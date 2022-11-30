import { StyleSheet, Text, TextInput } from "react-native";
import React from 'react';

const InputData = ({label, placeholder, keyboardType, onChangeText, nameState, value}) => {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.textInput}
                keyboardType={keyboardType}
                value={value}
                onChangeText={(text) => onChangeText(nameState, text)}
            />
        </>
    )
}

export default InputData

const styles=StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 10,
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10
    }
})