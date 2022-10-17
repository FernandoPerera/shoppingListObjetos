import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

/**
 * keyboardType => Modifica el teclado para usos determinados.
 * onChangeText => Permite realizar una función mientras se escribe en el input.
 * value => Donde queremos introducir/guardar lo escrito, en el TextInput.
 */

const ProductInput = ({ onProductAdd }) => {

  const [productName, setProductName] = useState('')

  const changeTextHandler= (value) => {
    setProductName(value)  // Vamos a ir guardando en todo momento lo escrito en setProductName
  }
/*
  const changeNumberHandler= (howProducts) => {
    
  }

        <TextInput style={ styles.productName }
        placeholder='¿Cuántos quiere?'
        keyboardType='number-pad'
        onChangeText={changeNumberHandler}
        value={ howProducts }
*/
  const addProductHandler = () => {
    const sanitizedName = productName.trim()
    if (sanitizedName !== '') {
      onProductAdd(sanitizedName)
    }
      setProductName('')
  }

  return (
    <View style={ styles.inputContainer }>

        <TextInput style={ styles.productName }
          placeholder='Introduzca un producto'
          keyboardType='default'
          onChangeText={changeTextHandler}
          value={ productName } />

        <Button 
          style={styles.addButton} 
          title='Añadir' 
          onPress={addProductHandler}/>

      </View>
  )
}

const styles = StyleSheet.create({

  inputContainer: {
      alignContent: 'center',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#ad1457',
      width: '80%',
      height: 80,
      borderRadius: 10,
      flexDirection: 'row'
    },
    productName: {
      flex: 4,
      marginLeft: 15,
      color: 'white'
    },
    addButton : {
      flex: 1,
    }
})

export default ProductInput