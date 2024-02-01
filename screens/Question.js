import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default class Question extends React.Component {
  constructor() {
    super();
    this.state = {
      dropDownHeight: 40,
      selectedItem: "",
    };
  }

  goToNextScreen=(emergency)=>{

    this.props.navigation.navigate('Instructions',{'emergency': emergency})

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.poolagraph}>FIRST AID APP</Text>
        <View style={{ height: this.state.dropDownHeight }}>
          <DropDownPicker
            style={styles.box}
            items={[
              { label: "Cardiac arrest", value: "Cardiac" },
              { label: "Choking", value: "Choke" },
              { label: "Burns", value: "Burn" },
              { label: "Severe bleeding", value: "Blood" },
              { label: "Fractures", value: "Break" },
              { label: "Stroke", value: "Moving" },
              { label: "Shock", value: "Scary" },
              { label: "Hypothermia", value: "Cold" },
              { label: "Nosebleed", value: "Nose" },
              { label: "Heat stroke", value: "Hot" },
              { label: "Fainting ", value: "Fall" },
              { label: "Seizure", value: "Danger" },
            ]}
            value={this.state.selectedItem}
            open={this.state.dropDownHeight == 170 ? true : false}
            onSelectItem={(item) => {
              this.setState({ selectedItem: item.label });
            }}
            onOpen={() => {
              this.setState({ dropDownHeight: 170 });
            }}
            onClose={() => {
              this.setState({ dropDownHeight: 40 });
            }}
          />
        </View>
        <TextInput style={styles.input} />

        <Text style={styles.pickerText}>{this.state.selectedItem}</Text>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={()=>this.goToNextScreen(this.state.selectedItem)}
        >
          <Text style={styles.nextText}>Next!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10399b",
    padding: 8,
  },

  poolagraph: {
    color: "red",
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
    fontSize: 45,
    backgroundColor: "aqua",
    borderRadius: 20,
  },

  box: {
    marginTop: 80,
    marginBottom: 80,
  },

  input: {
    borderWidth: 2,
    borderColor: "white",
  },

  nextText: {
    alignSelf: "center",
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
  },
  nextButton: {
    marginTop: 50,
    backgroundColor: "aqua",
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
});
