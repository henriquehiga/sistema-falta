<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>

<font size="+12"><center>
_&lt;Sistema faltas&gt;_

</center></font>

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
- [Protótipos de tela](#protótipos-de-tela)
- [Modelo de domínio](#modelo-de-domínio)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)
- [Referências](#referências)

# Autores

- Henrique Yoshimitsu Nagata Higa (32154021)
- Beatriz Vieira Alves (32118929)
- Letícia do Carmo Souza Silva (32157843)
- Vinícius Figueiredo da Cruz (32148801)

# Descrição do projeto

Este projeto tem como objetivo desenvolver um sistema de gerenciamento de faltas para uma escola. O sistema permitirá que professores registrem faltas de forma fácil e intuitiva, gerar relatórios agrupados por data, ano do ensino, turma, professor, disciplina ou aluno, e enviar notificações por e-mail para pais ou responsáveis em caso de faltas excessivas. Além disso, o sistema será acessível a todos os usuários, incluindo pessoas com deficiências, e será acessível a partir de qualquer navegador web, inclusive em dispositivos móveis.

# Diagrama de casos de uso

https://github.com/codehiga/sistema-falta/blob/develop/docs/img/Diagrama%20de%20Casos%20de%20Uso.jpg 

|                                  Identificação                                  |                                                                                                                Gerenciar Faltas                                                                                                               |
|:-------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| UC 01                                                                           | Categoria escolhida para aplicação de faltas acadêmicas                                                                                                                                                                                       |
| Ator                                                                            | Professor                                                                                                                                                                                                                                     |
| Fluxo Alternativo                                                               | Há Existente                                                                                                                                                                                                                                  |
| Pontos de Exceção                                                               | Se ocorrer um erro durante o registro da presença, o professor deve tentar novamente ou entrar em contato com o suporte técnico.                                                                                                              |
| Pré-Condições                                                                   | O professor deve ter acesso ao sistema de gerenciamento de faltas e a lista de alunos matriculados no curso.                                                                                                                                  |
| Pós-Condições                                                                   | As informações sobre a frequência dos alunos e as comunicações com os alunos ausentes devem ser atualizadas no sistema.                                                                                                                       |
| Requisitos Não Funcionais                                                       | O sistema de gerenciamento de faltas deve ser seguro, confiável e fácil de usar. O professor deve ter acesso ao sistema em tempo real, a qualquer momento do curso. O sistema deve ser capaz de lidar com um grande número de alunos e aulas. |
| **FLUXO PRINCIPAL**                                                             |                                                                                                                  **--------**                                                                                                                 |
| _Ações do Ator_                                                                 | _Ações do Sistema_                                                                                                                                                                                                                            |
| 1. Realiza o login no sistema selecionando seu nome e cargo.                    | 2. Valida os dados preenchidos.                                                                                                                                                                                                               |
| 3. Acessa o gerenciamento de faltas.                                            |                                                                                                                                                                                                                                               |
| 4. Seleciona a turma na qual deseja gerenciar as faltas.                        |                                                                                                                                                                                                                                               |
| 5. Visualiza a lista de alunos matriculados na turma.                           |                                                                                                                                                                                                                                               |
| 6. Seleciona o aluno que receberá a falta desejada.                             |                                                                                                                                                                                                                                               |
| 7. Indica o tipo de falta (justificada ou não justificada) e a data da falta.   |                                                                                                                                                                                                                                               |
| 8. Submete o registro de falta.                                                 | 9. Armazena os dados preenchidos.                                                                                                                                                                                                             |
| 10. Repete os passos 6 a 8 para cada aluno que faltou.                          |                                                                                                                                                                                                                                               |
|                                                                                 | 11. Imprimi na tela "Faltas inseridas com sucesso!"                                                                                                                                                                                           |
| 12. Finaliza o gerenciamento de faltas.                                         |                                                                                                                                                                                                                                               |
| **FLUXO ALTERNATIVO - EDIÇÃO DE FALTA REGISTRADA INCORRETAMENTE**               |                                                                                                                  **--------**                                                                                                                 |
| _Ações do Ator_                                                                 | _Ações do Sistema_                                                                                                                                                                                                                            |
| 1. Acessa o gerenciamento de faltas.                                            |                                                                                                                                                                                                                                               |
| 2. Seleciona a turma na qual deseja gerenciar as faltas.                        |                                                                                                                                                                                                                                               |
| 3. Visualiza a lista de alunos matriculados na turma.                           |                                                                                                                                                                                                                                               |
| 4. Seleciona o aluno cuja falta deseja editar.                                  |                                                                                                                                                                                                                                               |
| 5. Seleciona a falta registrada incorretamente.                                 |                                                                                                                                                                                                                                               |
| 6. Edita o tipo de falta (justificada ou não justificada) e/ou a data da falta. |                                                                                                                                                                                                                                               |
| 7. Submete a edição da falta.                                                   | 8. Atualiza os dados da falta no sistema.                                                                                                                                                                                                     |
|                                                                                 | 9. Imprimi na tela "Edição de Faltas realizadas com sucesso!".                                                                                                                                                                                |
| 10. Finaliza a edição da falta.                                                 |                                                                                                                                                                                                                                               |


|              Identificação              |                                                       Recebe Notificação                                                       |
|:---------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|                  UC 02                  |                                      Categoria escolhida para recebimento de notificação.                                      |
|                  Atores                 |                                                      Responsável do Aluno                                                      |
|                Descrição                | O Responsável do Aluno recebe notificações sobre a situação acadêmica de seu filho,sobre excedimento do limite de 75% de falta |
|              Pré-condições              |                                     O sistema deve estar conectado à internet e disponível                                     |
|              Pós-condições              |                                           O Responsável do Aluno recebe a notificação                                          |
| **FLUXO PRINCIPAL**                     |                                                           **-------**                                                          |
|             _Ações do Ator_             |                                                       _Ações do Sistema_                                                       |
|                                         |                                1. O sistema detecta que o aluno excedeu o limite de 75% de falta                               |
|                                         |                                 2. O sistema envia uma notificação para o Responsável do Aluno                                 |
|                                         |                                         3. O Responsável do Aluno recebe a notificação                                         |
| 4. Recebe que há notificação disponível |                                                                                                                                |
|           5. Acessa o sistema           |                                                                                                                                |
|     6. Acessa a área de notificações    |                                                                                                                                |
|       7. Visualiza as notificações      |                                                                                                                                |
|       8. Seleciona uma notificação      |                                                                                                                                |
|     9. Lê o conteúdo da notificação     |                                                                                                                                |
|         10. Fecha a notificação         |                                                                                                                                |





# Protótipos de tela

https://github.com/codehiga/sistema-falta/tree/develop/docs/img


# Modelo de domínio

https://github.com/codehiga/sistema-falta/blob/develop/docs/img/Diagrama%20de%20Dom%C3%ADnio.drawio.png

# Decisões de arquitetura 

## Nome do Grupo: Semente do Código 

## Integrantes: 

Beatriz Vieira, 32118929 
Henrique Higa, 32154021 
Letícia Silva, 32157842 
Vinícius Figueiredo, 32148801 


## Descrição: 
O Sistema será desenvolvido na linguagem NodeJS em Typescript para a parte do BackEnd. Já o FrontEnd será desenvolvido com ReactJS e SaSS. Para o versionamento do código utilizaremos o Git. No armazenamento dos dados utilizaremos o PostgreSQL. Teremos implementado um conjunto de funcionalidades que permitirão ao usuário a ação de poder controlar a frequência dos alunos de uma determinada escola. E utilizaremos um software de testes. 


## Entidades: 
A estrutura do projeto conta com Aluno, Falta, Aula, Professor e Disciplina! Aluno: id, nome, email_responsavel, turma_id. 
Professor: id, nome. 
Disciplina: id, nome, qtd_aulas. 
Aula: id, professor_id, disciplina_id. 
Falta: id, aluno_id, aula_id, data. 
Turma: id, nome.

## Relacionamentos: 
O Professor e a Disciplina estão diretamente relacionados à Aula. Portanto, a Aula está relacionada com a Falta, igualmente ao Aluno. 

## Design: 
Será desenvolvido um protótipo para que a visualização do projeto seja esclarecedora em relação ao seu funcionamento, fazendo com que os elementos para efeitos de tela, sejam bem posicionados e escolhidos em relação ao tipo de sistema que estamos trabalhando!


# Diagrama de implantação

_&lt;Diagrama de implantação&gt;_

# Referências

_&lt;Lista de referências&gt;_
