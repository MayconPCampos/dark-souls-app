import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  frameContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  statNameContainer: {
    flex: 6,
    height: 42,
    backgroundColor: '#555',
    borderWidth: 1,
    borderColor: '#555',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  statName: {
    color: '#ddd',
  },
  statImageContainer: {
    flex: 1,
    height: 42,
    backgroundColor: '#555',
    borderWidth: 1,
    borderColor: '#555',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statImage: {
    width: 30,
    height: 30,
  },
  statValueContainer: {
    flex: 1,
    height: 42,
    backgroundColor: '#555',
    borderWidth: 1,
    borderColor: '#555',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValue: {
    color: '#ddd',
  },
});

export default style;
