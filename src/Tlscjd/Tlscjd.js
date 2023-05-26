import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import DeviceInfo from '../../deviceInfo';

export default function Tlscjd() {
  const [userId, setUserId] = useState('');
  const [detail, setDetail] = useState('');
  const [IMEI, setIMEI] = useState('');
  const [passReason, setPassReason] = useState('');
  const [startPeriod, setStartPeriod] = useState('');
  const [endPeriod, setEndPeriod] = useState('');
  const [requestStatus, setRequestStatus] = useState(''); // 요청 상태 메시지 저장
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // 성공 메시지 표시 여부
  const [responseData, setResponseData] = useState(null); // 조회된 데이터 저장

  useEffect(() => {
    const fetchDeviceInfo = async () => {
      try {
        const installationId = await DeviceInfo.getDeviceInfo();
        setIMEI(installationId);
      } catch (error) {
        console.log("Error retrieving device info:", error);
      }
    };

    fetchDeviceInfo();
  }, []);

  const sendRequestToPostman = async () => {
    const data = {
      userId: Number(userId),
      detail,
      IMEI,
      passReason,
      startPeriod: Number(startPeriod),
      endPeriod: Number(endPeriod),
    };

    try {
      const response = await fetch('http://localhost:8080/pass/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setRequestStatus('POST 요청 성공');
        setShowSuccessMessage(true); // 성공 메시지 표시
      } else {
        setRequestStatus('POST 요청 실패');
        setShowSuccessMessage(false); // 성공 메시지 숨김
      }
    } catch (error) {
      console.error('POST 요청 오류:', error);
      setRequestStatus('POST 요청 오류');
      setShowSuccessMessage(false); // 성공 메시지 숨김
    }
  };

  const fetchResponseData = async () => {
    try {
      const response = await fetch('http://localhost:8080/pass');
      if (response.ok) {
        const data = await response.json();
        setResponseData(data);
      } else {
        console.error('데이터 조회 실패');
        setResponseData(null);
      }
    } catch (error) {
      console.error('데이터 조회 오류:', error);
      setResponseData(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableOpacity style={styles.button} onPress={sendRequestToPostman}>
          <Text style={styles.buttonText}>신청</Text>
        </TouchableOpacity>
        {requestStatus ? <Text style={styles.statusText}>{requestStatus}</Text> : null}
        {showSuccessMessage && (
          <Text style={styles.successMessage}>성공!</Text>
        )} {/* 성공 메시지 표시 */}
        <TouchableOpacity style={styles.button} onPress={fetchResponseData}>
          <Text style={styles.buttonText}>조회</Text> {/* 조회 버튼 */}
        </TouchableOpacity>
        {responseData && (
          <View style={styles.responseContainer}>
            <Text style={styles.responseTitle}>조회 결과:</Text>
            <Text style={styles.responseText}>{JSON.stringify(responseData)}</Text>
          </View>
        )}
        <TextInput
          style={styles.ad}
          placeholder="User ID"
          value={userId}
          onChangeText={setUserId}
        />
        <TextInput
          style={styles.ad}
          placeholder="Detail"
          value={detail}
          onChangeText={setDetail}
        />
        <TextInput
          style={styles.ad}
          placeholder="IMEI"
          value={IMEI}
          onChangeText={setIMEI}
        />
        <TextInput
          style={styles.ad}
          placeholder="Pass Reason"
          value={passReason}
          onChangeText={setPassReason}
        />
        <TextInput
          style={styles.ad}
          placeholder="Start Period"
          value={startPeriod}
          onChangeText={setStartPeriod}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.ad}
          placeholder="End Period"
          value={endPeriod}
          onChangeText={setEndPeriod}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aqua',
    height: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  main: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 100,
  },
  button: {
    width: 150,
    height: 40,
    backgroundColor: '#1867FF',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ad: {
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'green',
  },
  responseContainer: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  responseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  responseText: {
    fontSize: 14,
    color: 'black',
  },
});
