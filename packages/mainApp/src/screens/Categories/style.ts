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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  container: {flex: 1},
  categoriesItem: {
    marginHorizontal: 10,
    width: 120,
    height: 120,
    marginVertical: '3.5%',
    opacity: 0.7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoryImgContainer: {
    width: 100,
    height: 100,
  },

  categoryImg: {
    width: 100,
    height: 100,
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(169, 169, 169, .3)',
    borderRadius: 5,
    resizeMode: 'cover',
  },

  categoryContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flexBasis: 2,
    flexWrap: 'wrap',
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
  img: {
    width: 100,
    height: 100,
  },
});
export default styles;
