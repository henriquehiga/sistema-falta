# Projeto: Sistema de Faltas Escolares

Este projeto tem como objetivo desenvolver um sistema de gerenciamento de faltas para uma escola. O sistema permitirá que professores registrem faltas de forma fácil e intuitiva, gerar relatórios agrupados por data, ano do ensino, turma, professor, disciplina ou aluno, e enviar notificações por e-mail para pais ou responsáveis em caso de faltas excessivas. Além disso, o sistema será acessível a todos os usuários, incluindo pessoas com deficiências, e será acessível a partir de qualquer navegador web, inclusive em dispositivos móveis.

## Tecnologias utilizadas

- Typescript: linguagem de programação utilizada no desenvolvimento do sistema.
- Prisma: framework para gerenciamento de banco de dados.
- Clean Architecture: metodologia utilizada para organização do código do sistema.

## Instalação

Para executar o projeto, é necessário clonar o repositório e instalar as dependências.

```
git clone https://github.com/codehiga/sistema-falta.git
cd sistema-falta
npm install
npm run start
```

# Uso

- Registro de faltas: os professores poderão registrar faltas de forma fácil e intuitiva através de uma interface web acessível.
- Relatórios de faltas: será possível gerar relatórios agrupados por data, ano do ensino, turma, professor, disciplina ou aluno para facilitar a análise e o acompanhamento do número de faltas.
- Notificações: o sistema enviará notificações por e-mail para pais ou responsáveis em caso de faltas excessivas (quando a porcentagem de comparecimento às aulas dadas até o momento estiverem abaixo de 80%).
- Acessibilidade: o sistema será acessível a todos os usuários, incluindo pessoas com deficiências, com recursos de acessibilidade como tamanho de fonte ajustável.
- Acesso a partir de qualquer navegador web: o sistema será acessível a partir de qualquer navegador web, inclusive em dispositivos móveis.
