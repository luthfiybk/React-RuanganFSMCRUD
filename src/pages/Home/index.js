import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import firebase from "../../config/firebase";
import { CardRuangan } from "../../components";

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ruangans: {},
            ruanganKey: []
        }
    }

    componentDidMount() {
        this.ambilData();
    }

    ambilData = () => {
        firebase.database().ref("Ruangan").once('value', (querySnapshot) => {
            let data = querySnapshot.val() ? querySnapshot.val(): {}
            let ruanganItem = {...data}

            this.setState({
                ruangans: ruanganItem,
                ruanganKey: Object.keys(ruanganItem)
            })
        })
    }

    removeData = (id) => {
        Alert.alert(
            "Info",
            "Anda yakin akan menghapus data ruangan?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {text: "OK", onPress: () => {
                    firebase.database().ref('Ruangan/'+id).remove()
                    this.ambilData()
                    Alert.alert('Hapus', 'Sukses menghapus data!')
                }}
            ],
            {cancelable: false}
        )
    }

    render() {
        const{ruangans, ruanganKey} = this.state
        return (
            <View style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>Daftar Ruangan</Text>
                    <View style={styles.line}/>
                </View>
                <View style={styles.listRuangan}>
                    {ruanganKey.length > 0 ? (
                        ruanganKey.map((key) => (
                            <CardRuangan key={key} ruanganItem={ruangans[key]} id={key}
                            {...this.props} removeData={this.removeData} />
                        ))
                    ) : (
                        <Text>Daftar Kosong</Text>
                    )}
                </View>
                <View style={styles.wrapperButton}>
                    <TouchableOpacity
                        style={styles.btnTambah}
                        onPress={() => this.props.navigation.navigate('TambahRuangan')}>
                            <FontAwesomeIcon icon={ faPlus } size={ 20 } color={ 'white' } /> 
                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        marginTop: 30
    },

    header: {
        paddingHorizontal: 30,
        paddingTop: 30
    },

    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },

    line: {
        borderWidth: 1,
        marginTop: 10,
    },

    listRuangan: {
        paddingHorizontal: 30,
        marginTop: 20
    },

    wrapperButton: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30
    },

    btnTambah: {
        padding: 20,
        backgroundColor: 'skyblue',
        borderRadius: 30,
        shadowcolor:"#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    }
})