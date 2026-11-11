Projeto acadêmico desenvolvido durante o curso de Análise e Desenvolvimento de Sistemas (FATEC Zona Sul).


O **Meuappfutebol** é uma aplicação mobile construída em **React Native (Expo)** cujo objetivo central foi **desenvolver uma interface intuitiva com sistema de banco de dados**, solucionando o agendamento de partidas e a reserva de horários em quadras esportivas com foco em usabilidade e persistência em nuvem.

---

## 🎯 Objetivo e Escopo de Desenvolvimento

O projeto foi concebido para unir uma experiência de usuário (UI/UX) fluida no ecossistema mobile à robustez de uma camada de dados moderna na nuvem, dividindo-se em duas frentes fundamentais:

### 1. Front-End & Interface Intuitiva (React Native)
* **Fluxo de Acesso Amigável:** Telas de Login e Cadastro com validação de entradas, tratamento de estados e mensagens claras de feedback visual.
* **Busca e Descoberta:** Listagem com filtros por localização, tipo de piso (society, salão, campo) e visualização de horários vagos em tempo real.
* **Componentização Modular:** Cards dinâmicos para exibição de detalhes dos centros esportivos (fotos, comodidades, valores e status de ocupação).

### 2. Sistema de Banco de Dados & Autenticação (Supabase / Nuvem)
* **Arquitetura de Dados:** Modelagem e estruturação relacional das entidades de usuários, quadras e reservas com PostgreSQL em nuvem.
* **Autenticação Segura:** Fluxo de autenticação e controle de sessão gerenciado via serviço de Auth.
* **Segurança e Variáveis de Ambiente:** Isolamento de credenciais de conexão e chaves públicas através de arquivos de configuração (`.env`).

---

## 🛠️ Tecnologias Utilizadas

* **Mobile:** React Native, Expo, JavaScript
* **Navegação & UI:** React Navigation, StyleSheet API, React Hooks (`useState`, `useEffect`)
* **Banco de Dados & BaaS:** Supabase (PostgreSQL em Nuvem, Auth API)
* **Segurança:** Dotenv para isolamento de variáveis confidenciais

---

## 🚀 Como Executar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/luizprompt/meuappfutebol.git](https://github.com/luizprompt/meuappfutebol.git)
   cd meuappfutebol
