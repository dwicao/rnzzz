import { Platform, Dimensions } from 'react-native';

export const statusBarHeight = Platform.OS === 'ios' ? 20 : 0;
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;