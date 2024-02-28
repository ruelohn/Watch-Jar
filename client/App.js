import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from "react-native";

export default function App() {
  const { height } = useWindowDimensions();
  const [number, setNumber] = useState(0);
  const [word, setWord] = useState("");
  // Array of random words
  const randomWords = [
    "Iron Man",
    "The Incredible Hulk",
    "Iron Man 2",
    "Thor",
    "Captain America: The First Avenger",
    "The Avengers",
    "Iron Man 3",
    "Thor: The Dark World",
    "Captain America: The Winter Soldier",
    "Guardians of the Galaxy",
    "Avengers: Age of Ultron",
    "Ant-Man",
    "Captain America: Civil War",
    "Doctor Strange",
    "Guardians of the Galaxy Vol. 2",
    "Spider-Man: Homecoming",
    "Thor: Ragnarok",
    "Black Panther",
    "Avengers: Infinity War",
    "Ant-Man and The Wasp",
    "Captain Marvel",
    "Avengers: Endgame",
    "Spider-Man: Far From Home",
    "Black Widow",
    "Shang-Chi and the Legend of the Ten Rings",
    "Eternals",
    "Spider-Man: No Way Home",
  ];

  // Add more words as needed

  // Function to get a random word from the array
  function getRandomWord() {
    return randomWords[Math.floor(Math.random() * randomWords.length)];
  }
  const handlePressNumber = () => {
    const r = Math.random();
    console.log("handlePress", r);
    setNumber(r);
  };
  const handlePressWord = () => {
    const r = getRandomWord();
    console.log(handlePressWord, r);
    setWord(r);
  };
  // to-do: add state to display random word
  return (
    <View style={[styles.container, { height }, StyleSheet.absoluteFill]}>
      <Text>Random number: {number}</Text>
      <Text>Random Word: {word}</Text>
      <Pressable style={styles.btn} onPress={handlePressNumber}>
        <Text style={styles.btnText}>Generate a number</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={handlePressWord}>
        <Text style={styles.btnText}>Generate Random Marvel Movie</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "black",
    padding: 10,
    marginTop: 12,
  },
  btnText: {
    color: "white",
  },
});
