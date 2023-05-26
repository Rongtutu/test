import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function Tlscjd() {
  const sendRequestToPostman = async () => {
    const data = {
      userId: 9,
      detail: "lab5",
      IMEI: "MAC1010",
      passReason: "jus22t",
      startPeriod: 1,
      endPeriod: 1
    };

    try {
      const response = await fetch('localhost:8080/pass/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('POST 요청 성공');
        // 성공적으로 요청이 전송된 경우에 수행할 작업을 추가할 수 있습니다.
      } else {
        console.log('POST 요청 실패');
        // 요청이 실패한 경우에 대한 처리를 추가할 수 있습니다.
      }
    } catch (error) {
      console.error('POST 요청 오류:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>dldl</Text>
        <TouchableOpacity style={styles.button} onPress={sendRequestToPostman}>
          <Text style={styles.buttonText}>신청</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Button 2 pressed")}>
          <Text style={styles.buttonText}>조회</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Button 3 pressed")}>
          <Text style={styles.buttonText}>사용</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
	container: {
		backgroundColor: 'aqua',
		height: '100%',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	main: {
		height: '100%',
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		width: 150,
		height: 40,
		backgroundColor: '#1867FF',
		marginBottom: 10,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 20
	},
	buttonText: {
		color: 'black',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

