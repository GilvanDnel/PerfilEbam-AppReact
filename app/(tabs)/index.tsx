// ====================================================================================
// ARQUIVO: app/(tabs)/index.tsx
// OBJETIVO: Criar uma tela de perfil simples conforme os requisitos da atividade.
// ====================================================================================


// --- 1. IMPORTAÇÕES ---
// Nesta seção, trazemos para o nosso arquivo todas as ferramentas e "peças de lego" que vamos usar.

// A importação principal do React e do "Hook" (ferramenta) 'useState'.
// 'React' é a biblioteca base que permite a criação de componentes.
// 'useState' é o que nos permite criar variáveis que, quando mudam, atualizam a interface automaticamente.
import React, { useState } from 'react';

// Aqui importamos os componentes visuais básicos do próprio React Native.
import {
  Alert, // Cria um campo de formulário onde o usuário pode digitar texto.
  Button, // Um componente de botão simples e padrão do sistema operacional (Android/iOS).
  StyleSheet, // Um contêiner genérico para agrupar e organizar outros componentes. Pense nele como uma <div> do HTML.
  Text, // Usado exclusivamente para exibir qualquer tipo de texto na tela.
  TextInput,
  View, // Um contêiner genérico para agrupar e organizar outros componentes. Pense nele como uma <div> do HTML.
} from 'react-native';

// Importamos o SafeAreaView da biblioteca recomendada para lidar com áreas de tela especiais.
// Isso garante que nosso layout não fique por baixo de "notches" (recortes da câmera) ou barras de sistema.
import { SafeAreaView } from 'react-native-safe-area-context';


// --- 2. DEFINIÇÃO DO COMPONENTE DE TELA ---
// Um "Componente" no React é um pedaço de código reutilizável que descreve uma parte da interface do usuário.
// 'export default' permite que este componente seja importado e usado em outras partes do app.
// 'function HomeScreen()' declara nosso componente. O que ele 'return' (retornar) é o que será desenhado na tela.
export default function HomeScreen() {

  // --- 3. CRIAÇÃO DE ESTADOS ---
  // "Estado" é a memória do nosso componente. São variáveis que guardam dados que podem mudar com o tempo.

  // Aqui, usamos o Hook 'useState' para criar um estado para o nome.
  // 'useState('')' inicializa o estado com um valor de texto vazio.
  // Ele nos devolve um array com duas coisas:
  // 1. 'nome': A variável que guarda o valor atual do nome. (Inicialmente: '')
  // 2. 'setNome': A ÚNICA função que devemos usar para ATUALIZAR o valor de 'nome'.
  const [nome, setNome] = useState('');

  // Fazemos exatamente o mesmo para o estado da idade.
  // 1. 'idade': Guarda o valor atual da idade.
  // 2. 'setIdade': A função para atualizar o valor de 'idade'.
  const [idade, setIdade] = useState('');


  // --- 4. FUNÇÕES DE MANIPULAÇÃO DE EVENTOS (EVENT HANDLERS) ---
  // São funções que escrevemos para responder a interações do usuário (como cliques).

  // Esta função será executada quando o usuário pressionar o botão "Mostrar Alerta".
  // A sintaxe 'const nomeDaFuncao = () => {}' é uma "arrow function", uma forma moderna de declarar funções em JavaScript.
  const handleMostrarAlerta = () => {
    // 'if (!nome || !idade)' verifica se a variável 'nome' está vazia OU se a variável 'idade' está vazia.
    if (!nome || !idade) {
      // Se uma delas estiver vazia, usamos o componente 'Alert' para mostrar um aviso.
      Alert.alert('Atenção', 'Por favor, preencha nome e idade.');
      // 'return;' é usado para parar a execução da função aqui, impedindo que o alerta de sucesso apareça.
      return;
    }
    // Se a validação passar, o alerta de sucesso é exibido com os valores atuais dos estados 'nome' e 'idade'.
    Alert.alert('Perfil ESBAM', `Usuário: ${nome}, Idade: ${idade}`);
  };

  // Esta função será executada quando o usuário pressionar o botão "Limpar".
  const handleLimpar = () => {
    // Chamamos a função 'setNome' com uma string vazia para limpar o estado do nome.
    setNome('');
    // Fazemos o mesmo para o estado da idade.
    setIdade('');
    // O React automaticamente percebe essa mudança de estado e redesenha a tela, o que faz com que os TextInputs fiquem vazios.
  };


  // --- 5. RENDERIZAÇÃO DA INTERFACE (JSX) ---
  // A instrução 'return' de um componente define a estrutura visual que será renderizada na tela.
  // O código abaixo é JSX, uma sintaxe que nos permite escrever algo parecido com HTML dentro do JavaScript.
  return (
    // O SafeAreaView é o nosso contêiner principal.
    // A propriedade 'style' é como aplicamos os estilos que definimos lá embaixo no StyleSheet.
    // As chaves `{styles.container}` indicam que estamos usando a variável 'styles' e pegando o objeto 'container' de dentro dela.
    <SafeAreaView style={styles.container}>

      {/* O componente Text exibe o título principal. Aplicamos o estilo 'title' a ele. */}
      <Text style={styles.title}>Perfil ESBAM</Text>

      {/* O componente TextInput é o nosso campo de formulário para o nome. */}
      <TextInput
        style={styles.input} // Aplica o estilo definido para os campos de entrada.
        placeholder="Digite seu nome" // Define o texto cinza que aparece como dica antes de o usuário digitar.
        value={nome} // A propriedade 'value' conecta o texto VISÍVEL no campo diretamente ao nosso estado 'nome'.
        onChangeText={setNome} // 'onChangeText' é uma função que é chamada toda vez que o usuário digita uma letra. Conectamos ela diretamente à nossa função 'setNome', então o estado 'nome' é atualizado em tempo real a cada digitação.
      />

      {/* Outro TextInput, desta vez para a idade. */}
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        value={idade} // Conecta o campo ao estado 'idade'.
        onChangeText={setIdade} // Atualiza o estado 'idade' a cada digitação.
        keyboardType="numeric" // Uma propriedade especial que faz o celular mostrar um teclado apenas com números.
      />

      {/* Um componente Text para exibir a saudação dinâmica. */}
      <Text style={styles.dynamicText}>
        {/* As chaves {} dentro do JSX nos permitem inserir lógica JavaScript. */}
        {/* Usamos um "operador ternário" (uma forma compacta de if/else): */}
        {/* CONDIÇÃO: nome && idade ? (se nome E idade tiverem conteúdo) */}
        {/* VALOR SE VERDADEIRO: `Olá, ${nome}! Você tem ${idade} anos.`  (mostra a frase com os valores) */}
        {/* VALOR SE FALSO: '' (mostra um texto vazio) */}
        {nome && idade ? `Olá, ${nome}! Você tem ${idade} anos.` : ''}
      </Text>

      {/* Um componente View que serve como um contêiner para os nossos botões. */}
      {/* Usamos ele para aplicar o estilo 'buttonContainer' que vai alinhar os botões lado a lado. */}
      <View style={styles.buttonContainer}>
        {/* O componente Button para o alerta. */}
        <Button
          title="Mostrar Alerta" // A propriedade 'title' define o texto que aparece no botão.
          onPress={handleMostrarAlerta} // A propriedade 'onPress' define QUAL FUNÇÃO executar quando o botão é clicado. Aqui, conectamos ao nosso 'handleMostrarAlerta'.
        />

        {/* Este é um truque comum para criar espaçamento. É um View invisível com uma largura fixa. */}
        {/* As chaves duplas `{{...}}` significam: as chaves de fora para código JS, e as de dentro para criar um objeto de estilo "inline". */}
        <View style={{ width: 20 }} />

        {/* O componente Button para limpar os campos. */}
        <Button
          title="Limpar"
          onPress={handleLimpar} // Conectamos este botão à nossa função 'handleLimpar'.
          color="#dc3545" // A propriedade 'color' permite customizar a cor do botão.
        />
      </View>
    </SafeAreaView>
  );
}


// --- 6. FOLHA DE ESTILOS (STYLESHEET) ---
// Usamos 'StyleSheet.create' para definir todos os nossos estilos em um único lugar.
// Isso melhora a organização e a performance do aplicativo.
const styles = StyleSheet.create({
  // 'container' é um objeto que contém todas as regras de estilo para o nosso contêiner principal.
  container: {
    flex: 1, // 'flex: 1' diz ao contêiner para ocupar todo o espaço vertical disponível na tela.
    justifyContent: 'center', // Alinha os componentes filhos verticalmente no centro. (Eixo principal, pois flexDirection é 'column' por padrão).
    alignItems: 'center',     // Alinha os componentes filhos horizontalmente no centro. (Eixo cruzado).
    backgroundColor: '#f0f4f7', // Define uma cor de fundo para a tela.
    padding: 20, // Adiciona um espaçamento interno de 20 pixels em todos os lados.
  },
  // Regras de estilo para o título.
  title: {
    fontSize: 40,             // Tamanho da fonte.
    fontWeight: 'bold',       // Deixa a fonte em negrito.
    color: 'blue',            // Cor do texto.
    marginBottom: 40,         // Adiciona uma margem na parte de baixo do elemento.
  },
  // Regras de estilo para os campos de texto.
  input: {
    width: '90%',             // Define a largura como 90% da largura do elemento pai (o 'container').
    height: 50,               // Altura fixa.
    borderColor: 'gray',      // Cor da borda.
    borderWidth: 1,           // Espessura da borda.
    borderRadius: 8,          // Deixa as bordas arredondadas.
    paddingHorizontal: 15,    // Adiciona espaçamento interno apenas na horizontal (esquerda e direita).
    fontSize: 18,
    marginBottom: 20,
  },
  // Regras de estilo para o texto de saudação.
  dynamicText: {
    fontSize: 18,
    fontStyle: 'italic',      // Deixa o texto em itálico.
    marginTop: 10,
    marginBottom: 30,
  },
  // Regras de estilo para o contêiner dos botões.
  buttonContainer: {
    flexDirection: 'row',     // A regra mais importante aqui. Muda o eixo principal para horizontal, alinhando os filhos (botões) lado a lado.
  },
});