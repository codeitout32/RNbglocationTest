import AsyncStorage from "@react-native-async-storage/async-storage";

const storage = AsyncStorage;

export default storage;

// to see if development or not.
export const isDev = __DEV__;
