import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Card, Icon } from "react-native-elements";
import axios from "axios";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      url: `http://localhost:5000/star?name=${this.props.navigation.getParam(
        "star_name"
      )}`
    };
  }

  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then(response => {
        this.setDetails(response.data.data);
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };
  

 

  render() {
    const {url} = this.state;
   
      return (
        <View style={styles.container}>
          <Card
            title={url.name}
 
          >
            <View>
              <Text
                style={styles.cardItem}
              >{`Distance : ${url.distance}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Mass : ${url.mass}`}</Text>
              <Text
                style={styles.cardItem}
              >{`Gravity : ${url.gravity}`}</Text>              
              <Text
                style={styles.cardItem}
              >{`Radius : ${url.radius}`}</Text>
             
            </View>
            
          </Card>
        </View>
      );
    
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});