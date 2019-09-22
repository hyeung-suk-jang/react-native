/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  TouchableOpacity,
  FlatList,

  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '첫번째 항목',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '두번째 항목',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '세번째 항목',
  },
  {
    id: '4',
    title: '네번째 항목',
  },
  {
    id: '5',
    title: '다섯번째 항목',
  },
  
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}


const App = () => {
	
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
     <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Itebm
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
