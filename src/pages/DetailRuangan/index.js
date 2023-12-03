import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import firebase from "../../config/firebase";

export default class DetailRuangan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ruangan: {}
        }
    }

    componentDidMount() {
        firebase.database().ref('Ruangan/'+ this.props.route.params.id).once('value', (querySnapshot) => {
            let data = querySnapshot.val() ? querySnapshot.val() : {}
            let ruanganItem = {...data}

            this.setState({
                ruangan: ruanganItem
            })
        })
    }

    render() {
        const { ruangan } = this.state
        return (
            <View style={styles.pages}>
                <Text>Kode Ruangan : </Text>
                <Text style={styles.text}>{ruangan.namaRuangan}</Text>

                <Text>Kapasitas : </Text>
                <Text style={styles.text}>{ruangan.kapasitas} orang</Text>

                <Text>Gedung : </Text>
                <Text style={styles.text}>{ruangan.gedung}</Text>

                <Text>Lantai : </Text>
                <Text style={styles.text}>{ruangan.lantai} </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    pages: {
        padding: 20,
        margin: 30,
        bakgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    text: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    }
})
