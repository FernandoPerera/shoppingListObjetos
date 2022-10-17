import { 
  Image, 
  Text, 
  View, 
  StyleSheet,
  Pressable
 } from 'react-native'

const ListItem = ({ productName, onProductRemove }) => {
  return (
    
        <Pressable onPress={() => onProductRemove(productName)}>
          <View style={styles.listItem} >

          <Image style={styles.productImage} source={require('../icons/grocery.png')}/>
          <Text style={styles.productName}>{productName}</Text>

          </View> 
        </Pressable>

    )
}

const styles = StyleSheet.create({
    listItem: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 12,
      padding : 5,
      paddingHorizontal: 30,
      backgroundColor: 'white',
      marginBottom: 15
    },
    productImage: {
      width: 60,
      height: 60,
      marginRight: 75
    },
    productName: {
      fontSize: 18,
    }
})

export default ListItem