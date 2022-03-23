import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
  itemBar: {
    width: '80%',
    flexDirection: 'row',
    paddingVertical: '5%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    marginLeft: '10%',
  },
  categoriesText: {
    color: 'darkgrey',
    textAlign: 'center',
    fontSize: 20,
  },
  view: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 30,
    alignContent: 'center',
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
  hr: {
    width: '80%',
    marginVertical: '4%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  headingText: {
    width: '80%',
    marginBottom: '3%',
    fontSize: 18,
  },
  pickerStyle: {
    width: '41%',
    textAlign:'center',
    margin: -15,  
  },
});
export default styles;
