import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  itemDetailSectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '4%',
  },
  itemDetailTitle: {
    color: '#ddd',
    fontSize: 28,
    marginTop: 12,
    marginBottom: 20,
  },
  itemDetailFrame: {
    borderWidth: 1,
    borderColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 60,
    marginBottom: 20,
  },
  itemInformationContainer: {
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    width: '30%',
  },
  itemInformation: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  itemInformationName: {
    color: '#8F7C44',
    paddingRight: 5,
    width: '100%',
  },
  itemInformationDescription: {
    color: '#ddd',
    width: '100%',
  },
});

export default style;
