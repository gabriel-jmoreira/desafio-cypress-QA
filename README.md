# desafio-cypress-QA

🚀 Desafio prático de testes automatizados com Cypress

## 📌 Sobre o projeto

Este repositório contém os testes automatizados desenvolvidos como parte da avaliação prática de QA com Cypress, para o site lojaebac.ebaconline.art.br

---

## 🧪 Cenários Automatizados

Foram escolhidos cenários com alto potencial de reaproveitamento, cobrindo funcionalidades críticas de autenticação, fluxo de compra e validações de produto:

### 1. Login
- ❌ Login com e-mail inválido  
- ❌ Login com senha incorreta  
- ✅ Login com credenciais válidas  

### 2. Carrinho e Compra
- ✅ Adicionar produto ao carrinho com sucesso  
- ✅ Finalizar a compra com sucesso  
- ❌ Tentar adicionar produto sem selecionar variações (exibe alerta)  

### 🔍 Motivo da escolha
Os fluxos de login e compra são essenciais em qualquer e-commerce. Validá-los garante maior estabilidade e evita erros em funcionalidades principais da plataforma.

---

## ⚙️ Como instalar e rodar os testes

### ✅ Pré-requisitos
- Node.js instalado  
- Git instalado  

### Passos para rodar localmente

# Clone o repositório
git clone https://github.com/gabriel-jmoreira/desafio-cypress-QA.git

# Acesse o diretório
cd desafio-cypress-QA

# Instale as dependências
npm install

# Execute os testes com a interface do Cypress
npx cypress open

##  Estrutura dos arquivos)

desafio-cypress-QA
├── cypress
│   └── e2e
│       ├── login.cy.js
│       └── carrinho.cy.js
├── cypress.config.js
├── package.json
└── README.md

👨‍💻 Autor
Gabriel Moreira
Linkedin: https://www.linkedin.com/in/gabrieljrmoreira/


---

### ✅ Agora sim: o que você deve fazer

1. Copie **todo o conteúdo acima**.
2. Vá no seu repositório GitHub .
3. Clique no `README.md`.
4. Clique no ícone do lápis (✏️) para editar.
5. Cole esse conteúdo lá e clique em **Commit changes**.
