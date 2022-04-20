import {StyleSheet} from 'react-native';
import {dimensions} from '../../res';
import fonts from '../../res/fonts';

const {height} = dimensions.window;

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
  container: {flex: 1, paddingTop: 30},
  categoriesItem: {
    marginHorizontal: '1.5%',
    // height: height * 0.15,
    height: 110,
    width: '27%',
    marginVertical: '3%',
    paddingVertical: '5%',
    opacity: 0.8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(169, 169, 169, .3)',
    borderRadius: 5,
  },

  categoryImgContainer: {
    width: 100,
    height: 100,
  },

  categoryImg: {
    // width: null,
    aspectRatio: 1,
    height: 40,
    flex: 1,
    borderRadius: 5,
    resizeMode: 'cover',
  },

  categoryContainer: {
    // width: '100%',
    // height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // alignContent: 'space-around',
    // flexBasis: 2,
    flexWrap: 'wrap',
  },
  categoriesText: {
    color: 'darkgrey',
    textAlign: 'center',
    // textTransform: 'capitalize',
    fontFamily: fonts.robotoBold,
    fontSize: 16,
    marginTop: '5%',
  },
  view: {
    // flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    justifyContent: 'flex-start',
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
