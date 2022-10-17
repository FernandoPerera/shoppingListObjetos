import { useState } from 'react'

import { ScrollView, StyleSheet, Text, View } from 'react-native'
import ProductInput from './components/ProductInput'
import ListItem from './components/ListItem'

export default function App() {

  /*const product = {
    id: 1,
    name: '',
    quantitly: 0,
    bought: 0,
    type:''
  }
*/

  const [ productList, setProductList ] = useState([])

/**
 * const [ productList, setProductList ] = useState([
  {
    id: uuid,
    name: '',
    number: 0
  }
])
 * 
 * : productList.map( (product, index) => (
                  <ListItem 
                    key={product.id} 
                    productName={product.name}
                    productNumber={product.number}
                    onProductRemove={removeProductHandler}/>
                  )) }
 */


  const addProductHandler = (productName) => {
    setProductList( () => [...productList, productName])
  }

  const removeProductHandler = (productName) => {
    setProductList( () => productList.filter( (product) => product !== productName))
  }

  return (
    <View style={styles.container}>
      
      <ProductInput onProductAdd={addProductHandler}/>

        <View style={styles.productList}>
          <ScrollView>
              
              {productList.length === 0 
                ? <View style={styles.emptyList}>
                    <Text style={styles.emptyText}>Aún no hay productos</Text>

                  </View>

                : productList.map( (product, index) => (
                  <ListItem 
                    key={index+product} 
                    productName={product}
                    onProductRemove={removeProductHandler}/>
                  )) }
            
          </ScrollView>
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',   // Usamos flex start para colocar el View en la parte superior de la pantalla
    width: '100%',
    backgroundColor: '#lightgray',
    marginTop: 45
  },
  bodyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lemonchiffon',
    width: '90%',
    borderRadius: 10
  },
  productList : {
    flex : 4, 
    width: '90%',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: '#E8B775',
    margin: 10,
    padding: 10,
  },
  emptyList : {
    alignItems: 'center',
    width: '90%',
    borderWidth: 2,
    borderRadius: 12,
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
  },
  emptyText : {
    fontSize: 18,
    padding: 5
  }
});
