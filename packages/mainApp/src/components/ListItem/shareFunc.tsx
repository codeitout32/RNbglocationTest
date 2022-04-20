import Share from 'react-native-share';

const shareFunc = (urlString: string) => {
  const options = {
    title: 'Solshorts',
    message:
      'Check out Sol-Shorts app. I found it best for reading Solana news. https://solshorts.io/mobile',
    url: urlString,
    type: 'image/jpeg',
  };

  Share.open(options)
    .then(res => {
      console.log('result', res);
    })
    .catch(err => {
      err && console.log(err);
    });
};

export default shareFunc;
