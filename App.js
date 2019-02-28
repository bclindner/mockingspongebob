/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Image,
  TextInput,
  Platform,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      altcasedText: ""
    };
  }
  updateText = text =>
    this.setState({ altcasedText: this.convertToAltcase(text) });
  convertToAltcase(text) {
    let caps = false;
    const arr = text.split("");
    return arr
      .map(char => {
        caps = !caps;
        if (caps) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("");
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.instructions}
          placeholder="Type something"
          onChangeText={text => this.updateText(text)}
        />
        <Text selectable style={styles.yeettext}>
          {this.state.altcasedText}
        </Text>
        {!!this.state.altcasedText && (
          <Image
            source={require("./mockingspongebob.png")}
            style={styles.mockingspongebob}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#aaaaaa",
    marginBottom: 5
  },
  yeettext: {
    textAlign: "center",
    color: "#000000",
    margin: 10
  },
  mockingspongebob: {
    height: 256,
    width: 256
  }
});
