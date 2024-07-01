import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Participant } from "../components/Participant";

export default function Home() {
  function handlePartipantAdd() {
    console.log("Participante adicionado");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
      <View style={styles.containerForm}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={handlePartipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant />
      <Participant />
      <Participant />
    </View>
  );
}
