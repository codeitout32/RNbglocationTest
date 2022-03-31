import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'transparent'},
  itemBar: {
    // width: '90%',
    flexDirection: 'row',
    paddingVertical: '10%',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    marginLeft: 25,
  },
  view: {
    flex: 1,
    // flexWrap: 'wrap',
    paddingTop: 100,
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
    marginLeft: '3%',
    fontSize: 18,
  },
  pickerStyle: {
    width: 120,
    textAlign: 'center',
    margin: -15,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#828282',
  },
  personalizeFeed: {
    flexDirection: 'row',
    paddingTop: '10%',
    paddingBottom: '10%',
    width: '90%',
  },
});
export default styles;
