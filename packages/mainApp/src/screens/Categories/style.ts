import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#303030'},
  categoriesItem: {
    width: '30%',
    height: 110,
    backgroundColor: 'transparent', //'#00BAFF',
    margin: '1.5%',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'darkgrey',
    borderRadius: 5,
  },
  categoriesText: {
    color: 'darkgrey',
    textAlign: 'center',
    fontSize: 20,
  },
  view: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 50,
    // justifyContent: 'space-evenly',
    alignItems: 'baseline',
    // alignContent: 'center',
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
