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
    backgroundColor: '#3D3D3D',
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
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 2,
  },
  itemListContainer: {
    margin: 2,
    height: 150,
    borderTopWidth: 1,
    borderTopColor: '#8F7C44',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
  },
  itemListName: {
    color: '#ffffff',
    marginLeft: 40,
  },
});

export default style;
