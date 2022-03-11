import {Share} from 'react-native';

const shareFunc = () => {
  Share.share({message: 'hello share', title: 'solShort'});
};

export default shareFunc;
