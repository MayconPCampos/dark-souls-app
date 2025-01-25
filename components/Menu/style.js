import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: '100%',
  },
  itemContainer: {
    paddingRight: 12,
    marginBottom: 60,
  },
  itemImageBorder: {
    backgroundColor: '#111',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderColor: '#8F7C44',
    borderWidth: 1,
  },
  imageContainer: {
    backgroundColor: '#111',
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  itemTitle: {
    color: '#ddd',
    textAlign: 'center',
    marginTop: 2,
  },
  itemList: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  itemListContainer: {
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#8F7C44',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    margin: 10,
  },
  itemListName: {
    color: '#ddd',
    marginLeft: 40,
    textDecorationLine: 'underline',
  },
});

export default style;
