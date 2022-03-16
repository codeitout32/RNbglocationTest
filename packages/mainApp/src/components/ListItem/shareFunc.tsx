import Share from 'react-native-share';

const shareFunc = (urlString: string) => {
  const options = {
    title: 'Solshorts',
    message: 'Read More at SolShorts',
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
