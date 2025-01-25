import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  contentTextContainer: {
    width: '100%',
  },
  contentTextHead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginBottom: 10,
  },
  contentImage: {
    width: 50,
    height: 50,
  },
  contentTitle: {
    fontSize: 22,
    color: '#8F7C44',
    marginLeft: 10,
  },
  contentText: {
    color: '#ddd',
    width: 'auto',
    fontStyle: 'italic',
    marginBottom: 20,
  },
});

export default style;
