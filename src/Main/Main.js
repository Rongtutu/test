import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Main() {

  const handler = () => {
		console.log("룽투투!!");
	}

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.info}>
        </View>
        <View style={styles.addbox}>
          <View style={styles.buttonbox}>
            <TouchableOpacity onPress={handler} style={styles.post_add}>
              <Image source={require('../../assets/images/postadd.png')} style={styles.post_add_img} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  main: {
		width: '100%',
		height: 764,
		bottom: 0,
		position: 'absolute',
		display: 'flex',
    alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'aqua',
	},
	info: {
		width: 360,
		height: 100,
		borderRadius: 15,
		backgroundColor: '#1867FF',
	},
	addbox: {
		width: '100%',
		height: 100,
		margin: 'auto',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderColor: 'black',
		position: 'absolute',
		bottom: 0,
	},
	post_add: {
		width: 65,
		height: 65,
		backgroundColor: '#1867FF',
		borderRadius: 100,
		borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center'
	},
	post_add_img: {
		width: 35,
		height: 40,
	},
});