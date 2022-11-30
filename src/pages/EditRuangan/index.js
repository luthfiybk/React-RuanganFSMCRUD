import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import React, { Component } from "react";
import { InputData } from "../../components";
import firebase from "../../config/firebase";

export default class EditRuangan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      namaRuangan: "",
      kapasitas: "",
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("Ruangan/" + this.props.route.params.id)
      .once("value", (querySnapshot) => {
        let data = querySnapshot.val() ? querySnapshot.val() : {};
        let ruanganItem = { ...data };

        this.setState({
          namaRuangan: ruanganItem.namaRuangan,
          kapasitas: ruanganItem.kapasitas,
        });
      });
  }

  onChangeText = (nameState, value) => {
    this.setState({
      [nameState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.namaRuangan && this.state.kapasitas) {
      const ruanganReferensi = firebase.database().ref("Ruangan/" + this.props.route.params.id);

      const ruangan = {
        namaRuangan: this.state.namaRuangan,
        kapasitas: this.state.kapasitas,
      };

      ruanganReferensi
        .update(ruangan)
        .then((data) => {
          Alert.alert("Sukses", "Data ruangan terupdate!");
          this.props.navigation.replace("Home");
        })
        .catch((error) => {
          console.log("Error : ", error);
        });
    } else {
      Alert.alert("Error", "Nama Ruangan dan Kapasitas harus diisi!");
    }
  };

  render() {
    return (
      <View style={styles.pages}>
        <InputData label="Nama Ruangan" placeholder="Masukkan Nama Ruangan" onChangeText={this.onChangeText} value={this.state.namaRuangan} nameState="namaRuangan" />

        <InputData label="Kapasitas" placeholder="Masukkan Jumlah Kapasitas Ruangan" onChangeText={this.onChangeText} value={this.state.kapasitas} nameState="kapasitas" />

        <TouchableOpacity style={styles.tombol} onPress={() => this.onSubmit()}>
          <Text style={styles.textTombol}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },

  tombol: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },

  textTombol: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
