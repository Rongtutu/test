import React, { useEffect } from 'react';
import DeviceInfo from '../../deviceInfo';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const installationId = await DeviceInfo.getDeviceInfo(); // 기기 고유 ID 가져오기
        console.log(installationId);
      } catch (error) {
        console.log("Error retrieving device info:", error);
      }
    };

    fetchDeviceInfo();
  }, []);

  const handler = () => {
    console.log("룽투투!!");
  };

  const handleLink = () => {
    navigation.navigate('Main'); // 네비게이션을 통해 메인 화면으로 이동
  };

  return (
    <View style={styles.container}>
      {/* <Text>aesrhetrsjdt</Text>
      <Image  source={require('./assets/images/rongtutu.png')} style={styles.image} /> */}
      <View style={styles.main}>
        <View style={styles.logo}>
          {/* <Image source={require('./assets/images/rongtutu.png')} style={styles.image}/> */}
        </View>
        <View style={styles.title}>
          <Text style={styles.firtitle}>간편한</Text>
          <Text style={styles.sectitle}>출입인증</Text>
        </View>
        <View style={styles.inputBox}>
          <View style={styles.Input}>
            <Text style={styles.text}>학번</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.Input}>
            <Text style={styles.text}>비밀번호</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
          </View>
        </View>
        <TouchableOpacity onPress={handler} style={styles.button}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLink}>
          <Text>main</Text>
        </TouchableOpacity>
        {/*"localhost:8080/login"*/}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1867FF',
  },
  main: {
    width: 280,
    height: 690,
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
  },
  image: {
    width: 110,
    height: 110,
  },
  title: {
    marginTop: 40,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firtitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
  sectitle: {
    fontSize: 22,
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
  },
  inputBox: {
    marginTop: 40,
  },
  Input: {
    margin: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    width: 250,
    height: 43,
    borderWidth: 0,
    marginTop: 10,
    fontSize: 15,
    borderRadius: 5,
    padding: 0,
    paddingLeft: 15,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 50,
    width: 170,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0E9DCC',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});