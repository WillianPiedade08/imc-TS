import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#5c0b8b9a", 
  },
  title: {
    fontSize: 26,
    color: "#000000ff", 
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#44185eff", 
  },
  input: {
    width: "80%",
    borderColor: "#000000ff",
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#ffffffff"
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#b47df3ff"
  },
  imcResult: {
    fontSize: 18,
    color: "#000000ff",
    marginTop: 10,
    fontWeight: "bold"
  }
});

export default function Index() {
  // IMC
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultadoIMC, setResultadoIMC] = useState("");

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", "."));
    if (!pesoNum || !alturaNum) {
      setResultadoIMC("Preencha peso e altura corretamente.");
      return;
    }
    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = "";
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade grau I";
    } else if (imc < 39.9) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }
    setResultadoIMC(`Seu IMC é ${imc.toFixed(2)} e você está classificado como ${classificacao}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <TextInput
        placeholder="Peso (kg)"
        style={styles.input}
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Altura (m)"
        style={styles.input}
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />
      <Button
        title="Calcular IMC"
        color="#000000ff"
        onPress={calcularIMC}
      />
      {resultadoIMC !== "" && (
        <Text style={styles.imcResult}>{resultadoIMC}</Text>
      )}
    </View>
  );
}