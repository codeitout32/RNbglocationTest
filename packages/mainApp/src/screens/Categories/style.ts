import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  categoriesItem: {
    width: '30%',
    height: 100,
    backgroundColor: '#00BAFF',
    margin: '1.5%',
    justifyContent: 'center',
  },
  categoriesText: {
    color: 'white',
    textAlign: 'center',
  },
  view: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    // justifyContent: 'space-evenly',
    alignItems: 'baseline',
    // alignContent: 'space-around',
    // height: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default styles;
