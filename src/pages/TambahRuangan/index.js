import { StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import React, { Component } from "react";
import { InputData } from "../../components";
import firebase from "../../config/firebase";
import SelectDropdown from 'react-native-select-dropdown'

export default class TambahRuangan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      namaRuangan: "",
      kapasitas: "",
      gedung: "",
      lantai: ""
    };
  }

  onChangeText = (nameState, value) => {
    this.setState({
      [nameState]: value,
    });
  };

  onSubmit = () => {
    if (this.state.namaRuangan && this.state.kapasitas && this.state.gedung && this.state.lantai) {
      const ruanganReferensi = firebase.database().ref("Ruangan");
      const ruangan = {
        namaRuangan: this.state.namaRuangan,
        kapasitas: this.state.kapasitas,
        gedung: this.state.gedung,
        lantai: this.state.lantai
      };

      console.log("Ruangan: ", ruangan)

      ruanganReferensi
        .push(ruangan)
        .then((data) => {
          Alert.alert("Sukses", "Data ruangan tersimpan!");
          this.props.navigation.replace("Home");
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    } else {
      Alert.alert("Error", "Semua input harus diisi!");
    }
  };

  
  render() {
    const gedung = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const lantai = ['1', '2', '3']

    return (
      <View style={styles.pages}>
        <InputData label="Kode Ruangan" placeholder="Masukkan Kode Ruangan" onChangeText={this.onChangeText} value={this.state.namaRuangan} nameState="namaRuangan" />

        <InputData label="Kapasitas" placeholder="Masukkan Jumlah Kapasitas Ruangan" keyboardType="number-pad" onChangeText={this.onChangeText} value={this.state.kapasitas} nameState="kapasitas" />

        <Text style={{fontSize: 16, marginTop: 10, marginBottom: 5}}>
          Gedung
        </Text>
        <SelectDropdown 
          data={gedung}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index)
            this.onChangeText('gedung', selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          defaultValue={this.state.gedung}
          buttonStyle={{borderWidth: 1, borderColor: 'grey', borderRadius: 5, padding: 10, width: '100%'}}
          defaultButtonText="Pilih Gedung"
          buttonTextStyle={{textAlign: 'flex-start'}}
          dropdownIconPosition={'right'}
        />

        <Text style={{fontSize: 16, marginTop: 10, marginBottom: 5}}>
          Lantai
        </Text>
        <SelectDropdown 
          data={lantai}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index)
            this.onChangeText('lantai', selectedItem)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item
          }}
          defaultValue={this.state.lantai}
          buttonStyle={{borderWidth: 1, borderColor: 'grey', borderRadius: 5, padding: 10, width: '100%'}}
          defaultButtonText="Pilih Lantai"
          buttonTextStyle={{textAlign: 'flex-start'}}
          dropdownIconPosition={'right'}
        />

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
