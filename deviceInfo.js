import Constants from 'expo-constants';

export default class DeviceInfo {
  static async getDeviceInfo() {
    try {
      const installationId = Constants.installationId; // 기기 고유 ID 가져오기
      return installationId;
    } catch (error) {
      console.log("Error retrieving device info:", error);
      return null;
    }
  }
}
