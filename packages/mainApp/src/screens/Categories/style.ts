import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 0,
  },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  container: {flex: 1},
  categoriesItem: {
    width: '28%',
    height: 120,
    backgroundColor: 'transparent', //'#00BAFF',
    marginVertical: '2.5%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(169, 169, 169, .3)',
    borderRadius: 5,
    opacity: 0.7,
  },
  categoriesText: {
    color: 'darkgrey',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: 16,
    marginTop: '5%',
  },
  view: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 50,
    justifyContent: 'space-evenly',
    // alignItems: 'flex-start',
    // alignContent: 'flex-start',
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
