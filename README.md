🎯 Quiz Interativo em React

Este projeto é um quiz interativo desenvolvido em React com Vite, utilizando CSS Modules para estilização. O objetivo é testar conhecimentos sobre React Hooks e boas práticas no desenvolvimento de componentes, além de medir o tempo de resposta de cada questão.

🚀 Funcionalidades
📌 Quiz com 10 questões e 5 alternativas (A, B, C, D, E).
⏱️ Timer por questão – reinicia a cada nova pergunta.
📝 Registro de resposta escolhida e tempo gasto.
✅ Exibição de pontuação final, acertos e percentual de acertos.
📊 ScoreBoard mostrando:
    Questão respondida
    Resposta do usuário
    Resposta correta
    Pontuação da questão
    Tempo gasto
    Destaque em verde (acertos) e vermelho (erros)
    🔄 Botão Reiniciar Quiz para jogar novamente.

📂 Estrutura de Pastas:
src/
 ├─ components/
 │   ├─ Header/
 │   │   ├─ index.jsx
 │   │   └─ Header.module.css
 │   ├─ QuestionCard/
 │   │   ├─ index.jsx
 │   │   └─ QuestionCard.module.css
 │   ├─ ScoreBoard/
 │   │   ├─ index.jsx
 │   │   └─ ScoreBoard.module.css
 ├─ data/
 │   └─ questions.js
 ├─ App.jsx
 ├─ App.module.css
 ├─ main.jsx

🧩 Componentes:

🔹 Header:
    -> Exibe o título do quiz.
   ->  Mostra questão atual / total.
    -> Mostra timer da questão.

🔹 QuestionCard:
    -> Exibe enunciado da questão.
    -> Lista alternativas como botões clicáveis.
    -> Registra resposta e avança para próxima questão.

🔹 ScoreBoard:
    -> Mostra resumo final com pontuação, tempo e percentual de acertos.
    -> Lista todas as questões respondidas com destaque de acerto/erro.
    -> Possui botão para reiniciar o quiz.

📖 Tecnologias Utilizadas;
    ->  ⚛️ React
    ->    ⚡ Vite
    ->    🎨 CSS Modules
    ->    🕒 Manipulação de estado e tempo com useState e useEffect


▶️ Como Rodar o Projeto:

   1. Clone o repositório:
        git clone https://github.com/seu-usuario/quiz-interativo.git
        cd quiz-interativo

    2. Instale as dependências:
        npm install ou npm i 

    3. Rode o servidor de desenvolvimento:
        npm run dev

    4. Abra no navegador:
        http://localhost:5173
    


📊 Exemplo de Questão:
    {
  id: 1,
  question: "Qual hook é usado para gerenciar estados em componentes funcionais?",
  options: ["useEffect", "useState", "useProps", "useClass"],
  answer: "useState",
  points: 2
}



🎯 Objetivo Didático:
    Este projeto foi desenvolvido para exercitar:
     ->   useState e useEffect
     ->   Passagem de props
     ->   Organização por componentes
    ->    Uso de CSS Modules
    ->    Lógica de timer e estados no React