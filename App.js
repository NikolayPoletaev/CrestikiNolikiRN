import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [notification, setNotification] = useState('player to start')
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [secondPlaer, setSecondPlayer] = useState("O")
  const [refresh, setRefresh] = useState(false)
  const [arraymain, setArraymain] = useState([
    " ", "x", " ",
    " ", "x", " ",
    " ", "x", " "
  ])
  const pressField = (index) => {
    let newBoard = board
  }
  if (currentPlayer == "x") {
    newBoard[index] = "x"
  }
  return (
    <View style={styles.container}>
      <View style={styles.namegame}>НАЗВАНИЕ</View>
      <Text style={styles.text}>{notification}</Text>
      <FlatList style={styles.list} data={arraymain} extraData={refresh} numColumns={3} renderItem={({ item, index }) => (
        <TouchableOpacity style={styles.square} onPress={() => pressField(index)}>
          <Text style={styles.item}>{item}</Text>
        </TouchableOpacity>
      )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  },
  namegame: {
    fintSize: 30,
  },

  text: {
    fontSize: 18,
    color: 'green',
    padding: 10,
  },
  list: {
    width: 300,
    height: 300
  },
  square: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
    margin: 20
  },
  item: {
    fontSize: 30,

  }
});
