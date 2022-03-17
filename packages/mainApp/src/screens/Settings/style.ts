import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  itemBar: {
    // width: '80%',
    // height: 120,
    backgroundColor: 'transparent', //'#00BAFF',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    // width: '100%',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    alignItems: 'stretch',
    borderWidth: 0,
    borderColor: 'darkgrey',
    borderRadius: 5,
  },
  h4Style: {
    fontSize: 18,
  },
  categoriesText: {
    color: 'darkgrey',
    textAlign: 'center',
    fontSize: 20,
  },
  view: {
    // flexDirection: 'row',
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
