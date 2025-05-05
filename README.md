#  Projeto de Testes Automatizados com Cypress 

Este projeto foi desenvolvido como parte do curso **"Testes de aplicações modernas com Cypress"** e também como base para meu portfólio profissional. Utilizei o Cypress para criar testes automatizados focados inicialmente em **API** e, futuramente, também em testes de interface (front-end).

---

## 📁 Estrutura de Pastas

### 📂 `fixtures/`  
Armazena dados que podem ser usados nos testes, como:
- Arquivos JSON
- Mocks
- Outros arquivos auxiliares

### 📂 `e2e/`  
Contém os **arquivos de teste**, onde os cenários de automação são escritos.
- `api/` → Testes de endpoints REST
- `front/` → Testes de interface (em breve)

### 📂 `support/`  
Arquivos auxiliares e de suporte para os testes, como:
- Comandos personalizados (`commands.js`)
- Hooks globais (`e2e.js`)

---

##  Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6+)
- Node.js
- NPM

---

##  Como Executar os Testes

### 1. Instalar dependências
npm install 

### 2. Executar testes com interface gráfica (modo interativo)
npx cypress open

### 3. Executar testes em modo headless (linha de comando)
npx cypress run
