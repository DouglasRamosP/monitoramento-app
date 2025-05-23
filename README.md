
# Monitoramento e Agendamentos

Sistema fullstack para controle de agendamentos e monitoramento de atividades.

## Tecnologias

- **Frontend:** React + Vite
- **Backend:** Node.js + Express
- **Banco de Dados:** (MongoDB)

🛠️ Tecnologias Utilizadas
🔙 Backend
    Node.js: Ambiente de execução JavaScript no servidor.
    Express.js: Framework web para criação de APIs RESTful.
    MongoDB: Banco de dados NoSQL orientado a documentos.
    Mongoose: ODM (Object Data Modeling) para modelar dados do MongoDB.
    JWT (JSON Web Token): Autenticação segura baseada em tokens.
    bcryptjs: Criptografia de senhas.
    dotenv: Gerenciamento de variáveis de ambiente.
🌐 Frontend
    React.js + Vite: Biblioteca JavaScript para construção de interfaces de usuário.
    React Router DOM: Navegação entre páginas no frontend.
    Axios: Cliente HTTP para comunicação com a API.
    QRCode.react: Geração de QR Codes no frontend.
📱 Mobile (opcional)
    React Native ou Flutter: Para desenvolvimento do aplicativo móvel multiplataforma.
🧩 Funcionalidades Extras
    Leitura e geração de QR Codes: Para identificação rápida de equipamentos e acesso a funcionalidades.
    Sistema de pontos: Gamificação para incentivar o uso e o relato de problemas.
    Minimapa interativo: Navegação visual entre ambientes (a ser implementado no frontend).
🔐 Segurança
    Autenticação com JWT
    Criptografia de dados sensíveis
    Controle de acesso por perfil (usuário e administrador)

## Estrutura

monitoramento-app/ ├── frontend/ # Interface do usuário (React) ├── backend/ # API e lógica de negócios (Node.js)

## Como rodar

### Manual de criação e Gerencimento das branches

🌱 Branch Principal: main ou master
 - Contém o código estável e pronto para produção.
 - Nunca desenvolva diretamente nela.

🛠️ Quando criar uma branch?
Crie uma branch sempre que for:

 - Adicionar uma nova funcionalidade
 - Corrigir um bug
 - Trabalhar em uma melhoria visual ou estrutural
 - Fazer testes ou experimentos 

🧭 Como nomear branches?
Use nomes descritivos e padronizados. Exemplos:

![alt text](image.png)
![alt text](image-1.png)

🧪 Exemplo prático no seu projeto
Para o frontend:

 - git checkout -b feature/login-page

Para o backend:

 - git checkout -b feature/api-agendamentos
 
🔁 Fluxo de trabalho sugerido
Crie uma branch a partir da main:

    git checkout main
    git pull
    git checkout -b feature/nome-da-tarefa

Desenvolva normalmente.
Faça commits frequentes e descritivos:
    git add .
    git commit -m "Adiciona formulário de agendamento"

Quando terminar, faça merge com a main:
    git checkout main
    git pull
    git merge feature/nome-da-tarefa

Apague a branch se quiser:
    git branch -d feature/nome-da-tarefa


#### Frontend
```bash
cd frontend
npm install
npm run dev

#### Frontend

cd backend
npm install
node index.js

