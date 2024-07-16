import Botao from "@/components/Botao";
import styles from "@/contants/styles";
import Cpf from "@/utils/Cpf";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Formulario() {
  const [usuario, setUsuario] = useState<any>({});
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    AsyncStorage.getItem("usuario").then((usuario) => {
      if (usuario) {
        setUsuario(JSON.parse(usuario));
      }
    });
  }, []);

  function validar() {
    let erros = {};

    if (!usuario.nome) {
      erros = { ...erros, nome: "Nome é obrigatorio" };
    } else if (usuario.nome.length < 3) {
      erros = { ...erros, nome: "Nome deve ter no minimo 3 letras" };
    }

    setErrors(erros);
    return Object.keys(erros).length === 0;
  }

  function salvar() {
    if (validar()) {
      AsyncStorage.setItem("usuario", JSON.stringify(usuario));
    }
  }

  return (
    <View style={styles.centralizado}>
      <Text>Formulario</Text>
      <TextInput
        placeholder="Nome"
        style={[styles.input, errors.nome && styles.inputError]}
        value={usuario.nome ?? ""}
        onChangeText={(nome) => setUsuario({ ...usuario, nome })}
      />
      {errors.nome && <Text style={{ color: "red" }}>{errors.nome}</Text>}

      <TextInput
        placeholder="CPF"
        style={[styles.input, errors.nome && styles.inputError]}
        value={Cpf.formatCpf(usuario.cpf) ?? ""}
        keyboardType="phone-pad"
        onChangeText={(cpf) =>
          setUsuario({ ...usuario, cpf: Cpf.desformatCpf(cpf) })
        }
      />

      <Botao onPress={salvar}>
        <Text>Salvar</Text>
      </Botao>
    </View>
  );
}
