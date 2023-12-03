import { StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";

const CardRuangan = ({id, ruanganItem, navigation, removeData}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('DetailRuangan', {id:id})}>
            <View>
                <Text style={styles.nama}>{ruanganItem.namaRuangan}</Text>
                <Text style={styles.kapasitas}>Kapasitas: {ruanganItem.kapasitas} orang</Text>
            </View>
            <View style={styles.icon}>
                <Pressable onPress={() => navigation.navigate('EditRuangan', {id:id})} style={{marginRight: 5}}>
                    <FontAwesomeIcon icon={ faEdit } color={ 'orange' } size={ 25 }/>
                </Pressable>
                <Pressable onPress={() => removeData(id)}>
                    <FontAwesomeIcon icon={ faTimes } color={ 'red' } size={ 25 }/>
                </Pressable>
            </View>
        </TouchableOpacity>
    )
}

export default CardRuangan

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:5,   
    },

    nama: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },

    kapasitas: {
        fontSize: 12,
        color: 'gray',
    },

    icon: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 5,
    }
})