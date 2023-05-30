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
- [Plano de Teste Cenários](#plano-de-teste)
- [Referências](#referências)

# Autores

- Henrique Yoshimitsu Nagata Higa (32154021)
- Beatriz Vieira Alves (32118929)
- Letícia do Carmo Souza Silva (32157843)
- Vinícius Figueiredo da Cruz (32148801)

# Descrição do projeto

Este projeto tem como objetivo desenvolver um sistema de gerenciamento de faltas para uma escola. O sistema permitirá que professores registrem faltas de forma fácil e intuitiva, gerar relatórios agrupados por data, ano do ensino, turma, professor, disciplina ou aluno, e enviar notificações por e-mail para pais ou responsáveis em caso de faltas excessivas. Além disso, o sistema será acessível a todos os usuários, incluindo pessoas com deficiências, e será acessível a partir de qualquer navegador web, inclusive em dispositivos móveis.

# Diagrama de casos de uso

https://github.com/codehiga/sistema-falta/blob/main/docs/img/sistemadefalta%20(1).jpg

# Descrição de casos de uso

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
| 1a. Acessa o gerenciamento de faltas.                                            |                                                                                                                                                                                                                                               |
| 2a. Seleciona a turma na qual deseja gerenciar as faltas.                        |                                                                                                                                                                                                                                               |
| 3a. Visualiza a lista de alunos matriculados na turma.                           |                                                                                                                                                                                                                                               |
| 4a. Seleciona o aluno cuja falta deseja editar.                                  |                                                                                                                                                                                                                                               |
| 5a. Seleciona a falta registrada incorretamente.                                 |                                                                                                                                                                                                                                               |
| 6a. Edita o tipo de falta (justificada ou não justificada) e/ou a data da falta. |                                                                                                                                                                                                                                               |
| 7a. Submete a edição da falta.                                                   | 8a. Atualiza os dados da falta no sistema.                                                                                                                                                                                                     |
|                                                                                 | 9a. Imprimi na tela "Edição de Faltas realizadas com sucesso!".                                                                                                                                                                                |
| 10a. Finaliza a edição da falta.                                                 |                                                                                                                                                                                                                                               |


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


|                                       Identificação                                      |                                                             Gerenciar Aluno                                                             |
|:----------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------:|
|                                           UC 03                                          |                                         Categoria escolhida para gerenciamento de alunos.                                       |
|                                          Atores                                          |                                                              Administrador                                                              |
|                                         Descrição                                        |                  O Administrador gerencia os dados dos alunos, incluindo adição, exclusão e atualização de informações.                 |
|                                     Fluxo Alternativo                                    |                                                              Há Existentes                                                              |
|                                       Pré-condições                                      |                                          O sistema deve estar conectado à internet e disponível                                         |
|                                       Pós-condições                                      |                                            As informações do aluno são atualizadas no sistema                                           |
|                                 Requisitos Não Funcionais                                | O sistema deve ter recursos de segurança para proteger os dados dos alunos de acesso não autorizado e garantir a integridade dos dados. |
|                                    **FLUXO PRINCIPAL**                                   |                                                               **-------**                                                               |
|                                      _Ações do Ator_                                     |                                                            _Ações do Sistema_                                                           |
|                    1. Realiza o login no sistema com suas credenciais.                   |                                                                                                                                         |
|                                                                                          |                                              2. Autentica as credenciais de Administrador.                                              |
|                           3. Acessa o gerenciamento de alunos.                           |                                                                                                                                         |
|                                                                                          |                                         4. Apresenta uma lista de alunos cadastrados no sistema.                                        |
|                        5. Seleciona o aluno que deseja gerenciar.                        |                                                                                                                                         |
|                                                                                          |                                             6. Recupera as informações do aluno selecionado.                                            |
|                           7. Visualiza as informações do aluno.                          |                                                                                                                                         |
|                             8. Edita as informações do aluno.                            |                                                                                                                                         |
|                                                                                          |                                               9. Valida as informações do aluno editadas.                                               |
|                        10. Salva as informações editadas do aluno.                       |                                                                                                                                         |
|                                                                                          |                                           11. Confirma o salvamento das informações editadas.                                           |
|                              12. Retorna à lista de alunos.                              |                                                                                                                                         |
|                                                                                          |                                       13. Atualiza a lista de alunos com as informações editadas.                                       |
|                         14. Seleciona a opção de excluir o aluno.                        |                                                                                                                                         |
|                                                                                          |                                    15. Pergunta ao Administrador se ele deseja mesmo excluir o aluno.                                   |
|                             16. Confirma a exclusão do aluno.                            |                                                                                                                                         |
|                                                                                          |                                              17. Remove as informações do aluno do sistema.                                             |
|                         18. Retorna à lista de alunos atualizada.                        |                                                                                                                                         |
|                          19. Finaliza o gerenciamento de aluno.                          |                                                                                                                                         |
|                                   **FLUXO ALTERNATIVO**                                  | **-------**                                                                                                                             |
|                                       _Ações do Ator_                                      |                                                             _Ações do Sistema_                                                            |
|                     1a. O administrador insere informações inválidas.                    |                                                                                                                                         |
|                                                                                          |                                 2a. Informa ao administrador que as informações inseridas são inválidas.                                |
|                  3a. O administrador tenta salvar informações inválidas.                 |                                                                                                                                         |
|                                                                                          |                                  4a. Informa ao administrador que não é possível salvar as informações.                                 |
|                           5a. O administrador cancela as ações.                          |                                                                                                                                         |
|                                                                                          |                                      6a. Retorna para a situação anterior e o caso de uso encerra.                                      |
|                    1b. O administrador seleciona um aluno inexistente.                   |                                                                                                                                         |
|                                                                                          |                                     2b. Informa ao administrador que o aluno selecionado não existe.                                    |
|           3b. O administrador tenta editar informações de um aluno inexistente.          |                                                                                                                                         |
|                                                                                          |                       4b. Informa ao administrador que não é possível editar informações de um aluno inexistente.                       |
|                           5b. O administrador cancela as ações.                          |                                                                                                                                         |
|                                                                                          |                                      6b. Retorna para a situação anterior e o caso de uso encerra.                                      |
| 1c. O administrador tenta excluir um aluno que ainda está relacionado há uma disciplina. |                                                                                                                                         |
|                                                                                          |        2c. Informa ao administrador que não é possível excluir o aluno enquanto ele ainda estiver relacionado aquela disciplina.        |
|                           3c. O administrador cancela as ações.                          |                                                                                                                                         |
|                                                                                          |                                      4c. Retorna para a situação anterior e o caso de uso encerra.                                      |


|                                                       Identificação                                                       |                                                                                          Gerenciar Professor                                                                                         |
|:-------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                                           UC 04                                                           |                                                                  Categoria escolhida para aplicação de gerenciamento de professores                                                                  |
|                                                           Atores                                                          |                                                                                             Administrador                                                                                            |
|                                                         Descrição                                                         |                                                             Permitir que o administrador gerencie os professores cadastrados no sistema.                                                             |
|                                                     Fluxo Alternativo                                                     |                                                                                            Há Existentes                                                                                             |
|                                                       Pré-condições                                                       |                                                                          O administrador deve estar autenticado no sistema.                                                                          |
|                                                       Pós-condições                                                       |                                                                        As informações do professor são atualizadas no sistema.                                                                       |
|                                                 Requisitos Não Funcionais                                                 | O sistema deve estar disponível para acesso e utilização pelos administradores a qualquer momento, com exceção dos períodos de manutenção ou indisponibilidade por motivos técnicos ou de segurança. |
|                                                    **FLUXO PRINCIPAL**                                                    |                                                                                              **-------**                                                                                             |
|                                                      _Ações do Ator_                                                      |                                                                                          _Ações do Sistema_                                                                                          |
|                                   1. Seleciona a opção de gerenciamento de professores.                                   |                                                                                                                                                                                                      |
|                                                                                                                           |                                                                   2. Exibe a lista de todos os professores registrados no sistema.                                                                   |
|                                 3. Seleciona a opção de criar novo registro de professor.                                 |                                                                                                                                                                                                      |
| 4. Preenche as informações do novo professor, como nome, CPF, telefone, e-mail, formação e outras informações relevantes. |                                                                       5. Valida as informações preenchidas pelo administrador.                                                                       |
|                                  6. Armazena as informações do novo professor no sistema.                                 |                                                                                                                                                                                                      |
|                                                                                                                           |                                                                         7. Confirma o registro do novo professor no sistema.                                                                         |
|                                8. Seleciona a opção de editar informações de um professor.                                |                                                                                                                                                                                                      |
|                                 9. Seleciona o professor desejado na lista de professores.                                |                                                                                                                                                                                                      |
|                                   10. Edita as informações desejadas sobre o professor.                                   |                                                                       11. Valida as informações preenchidas pelo administrador.                                                                      |
|                                    12. Atualiza as informações do professor no sistema.                                   |                                                                                                                                                                                                      |
|                                                                                                                           |                                                                  13. Confirma a atualização das informações do professor no sistema.                                                                 |
|                                       14. Seleciona a opção de excluir um professor.                                      |                                                                                                                                                                                                      |
|                                15. Seleciona o professor desejado na lista de professores.                                |                                                                                                                                                                                                      |
|                                     16. Confirma a exclusão do professor selecionado.                                     |                                                                          17. Remove as informações do professor do sistema.                                                                          |
|                                                                                                                           |                                                                           18. Confirma a exclusão do professor no sistema.                                                                           |
|                                                  **FLUXOS ALTERNATIVOS**                                                  |                                                                                                                                                                                                      |
|                                                      _Ações do Ator_                                                      |                                                                                          _Ações do Sistema_                                                                                          |
|            5a. O sistema detecta que alguma informação preenchida pelo administrador é inválida ou incompleta.            |                                                          5b. Exibe uma mensagem de erro informando sobre a informação faltante ou inválida.                                                          |
|            11a. O sistema detecta que alguma informação preenchida pelo administrador é inválida ou incompleta.           |                                                          11b. Exibe uma mensagem de erro informando sobre a informação faltante ou inválida.                                                         |
|                      17a. O sistema detecta que o professor selecionado tem turmas associadas a ele.                      |                                          17b. Exibe uma mensagem de erro informando que o professor não pode ser excluído pois tem turmas associadas a ele.                                          |


|                                         Identificação                                         |                                                                        Gerenciar Turma                                                                        |
|:---------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|                                             UC 04                                             |                                                  Categoria escolhida para aplicação de gerenciamento de turma                                                 |
|                                             Atores                                            |                                                                         Administrador                                                                         |
|                                       Fluxo Alternativo                                       |                                                                         Há Existentes                                                                         |
|                                         Pré-condições                                         |                                                       O administrador deve estar autenticado no sistema.                                                      |
|                                         Pós-condições                                         |                                                       As informações da turma são atualizadas no sistema                                                      |
|                                   Requisitos Não Funcionais                                   |                      O sistema deve garantir a segurança das informações armazenadas, permitindo apenas o acesso de usuários autorizados.                     |
|                                      **FLUXO PRINCIPAL**                                      |                                                                          **-------**                                                                          |
|                                        _Ações do Ator_                                        |                                                                       _Ações do Sistema_                                                                      |
|           1. O administrador seleciona a opção "Gerenciar Turma" no menu principal.           |                                                                                                                                                               |
|                                                                                               |                                                      2. O sistema exibe uma lista de turmas cadastradas.                                                      |
|                        3. O administrador seleciona a turma e submete.                        |                                                                                                                                                               |
|                                                                                               |                                              4. O sistema exibe informações detalhadas sobre a turma selecionada                                              |
|                                                                                               |          5. O sistema permite a atualização de informações da turma, incluindo a adição ou exclusão de alunos e a atualização das faltas dos alunos.          |
| 6. O administrador pode adicionar ou remover alunos da turma, atualizar as faltas dos alunos. |                                                                                                                                                               |
|                           7. O administrador submete as alterações.                           |                                                                                                                                                               |
|                                                                                               |                                                         8. O sistema armazena as alterações na turma.                                                         |
|                                                                                               |                                              9. O sistema exibe uma mensagem confirmando a conclusão da operação.                                             |
|                                     **FLUXO ALTERNATIVO**                                     |                                                                          **-------**                                                                          |
|                                        _Ações do Ator_                                        |                                                                       _Ações do Sistema_                                                                      |
|                        1a. O administrador não seleciona nenhuma turma.                       |                                                                                                                                                               |
|                                                                                               |                        1b. O sistema exibe uma mensagem informando que é necessário selecionar uma turma para realizar o gerenciamento.                       |
|                      7a. O sistema não consegue armazenar as alterações.                      |                                                                                                                                                               |
|                                                                                               | 7a. O sistema exibe uma mensagem informando que houve um erro ao salvar as alterações. O administrador pode tentar submeter novamente ou cancelar a operação. |
|                        7b. O sistema consegue armazenar as alterações.                        |                                                                                                                                                               |
|                                                                                               |                                             7b. O sistema exibe uma mensagem confirmando a conclusão da operação.                                             |


|                                       Identificação                                      |                                                              Gerenciar Disciplina                                                             |
|:----------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------:|
|                                           UC 04                                          |                                       Categoria escolhida para aplicação de gerenciamento de disciplina                                       |
|                                          Atores                                          |                                                                 Administrador                                                                 |
|                                     Fluxo Alternativo                                    |                                                                 Há Existentes                                                                 |
|                                       Pré-condições                                      | O administrador deve estar logado no sistema e ter acesso ao menu "Gerenciar Disciplina"                                                      |
|                                       Pós-condições                                      | As informações da disciplina selecionada são atualizadas no sistema.                                                                          |
|                                 Requisitos Não Funcionais                                | O sistema deve ser capaz de lidar com um grande número de disciplinas, professores e alunos, sem comprometer sua funcionalidade e desempenho. |
|                                    **FLUXO PRINCIPAL**                                   |                                                                  **-------**                                                                  |
|                                      _Ações do Ator_                                     |                                                               _Ações do Sistema_                                                              |
|      1. O administrador seleciona a opção "Gerenciar Disciplina" no menu principal.      |                                                                                                                                               |
|                                                                                          |                                       2. O sistema exibe uma lista com todas as disciplinas cadastradas.                                      |
|            3. O administrador seleciona a opção de criar uma nova disciplina.            |                                                                                                                                               |
|                                                                                          |                    4. O sistema exibe um formulário para preencher os dados da nova disciplina, como nome e carga horária.                    |
|        5. O administrador preenche os dados da disciplina e submete o formulário.        |                                                                                                                                               |
|                                                                                          |                                            6. O sistema armazena as informações da nova disciplina.                                           |
|            7. O administrador seleciona uma disciplina existente para editar.            |                                                                                                                                               |
|                                                                                          |                                8. O sistema exibe os dados da disciplina selecionada em um formulário editável.                               |
| 9. O administrador realiza as alterações desejadas na disciplina e submete o formulário. |                                                                                                                                               |
|                                                                                          |                                        10. O sistema atualiza as informações da disciplina no sistema.                                        |
|           11. O administrador seleciona uma disciplina existente para excluir.           |                                                                                                                                               |
|                                                                                          |                                   12. O sistema exibe uma mensagem de confirmação da exclusão da disciplina.                                  |
|                  13. O administrador confirma a exclusão da disciplina.                  |                                                                                                                                               |
|                                                                                          |                                                 14. O sistema remove a disciplina do sistema.                                                 |
|                                   **FLUXO ALTERNATIVO**                                  |                                                                  **-------**                                                                  |
|                                      _Ações do Ator_                                     |                                                               _Ações do Sistema_                                                              |
|             6a. O administrador decide cancelar a criação da nova disciplina.            |                                                                                                                                               |
|                                                                                          |                                         7a. O sistema não armazena as informações da nova disciplina.                                         |
|          8a. O administrador decide cancelar a edição da disciplina selecionada.         |                                                                                                                                               |
|                                                                                          |                                      9a. O sistema não atualiza as informações da disciplina no sistema.                                      |
|              12a. O administrador decide cancelar a exclusão da disciplina.              |                                                                                                                                               |
|                                                                                          |                                               13a. O sistema não remove a disciplina do sistema.                                              |




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

[_&lt;Diagrama de implantação&gt;_](https://github.com/codehiga/sistema-falta/commit/e8c8b76ed88e77e290e4f49c27b519d060774911)

# Plano de Teste Cenários
| Identificação única                                               | Gerenciar Faltas                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Caso de uso em que se baseia                                      | Categoria escolhida para aplicação de faltas acadêmicas                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Cenário                                                           | Fluxo principal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Preparação (descrição da condição do sistema no inicio do teste)  | O sistema está funcionando corretamente, o professor realizou o login com sucesso e tem acesso à lista de alunos matriculados na turma selecionada.                                                                                                                                                                                                                                                                                                                                                           |
| Passos para a execução do teste                                   | [1] O professor acessa o sistema de gerenciamento de faltas. [2] O professor seleciona o curso para o qual deseja gerenciar as faltas. [3] O sistema exibe a lista de alunos matriculados no curso. [4] O professor marca as faltas dos alunos ausentes na data atual. [5] O professor salva as alterações feitas.                                                                                                                                                                                            |
| Resultado esperado                                                | ➢ O sistema registra corretamente as faltas para cada aluno selecionado. ➢ A mensagem "Faltas inseridas com sucesso!" é exibida na tela. ➢ As informações sobre a frequência dos alunos, com os alunos ausentes são atualizadas no sistema.                                                                                                                                                                                                                                                                   |
| Resultado do teste (para ser preenchido após a execução do teste) | 🔘 NÃO EXECUTADO 🟢 SUCESSO 🔘FALHA 🔘CANCELADO                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Descrição do resultado obtido                                     | Durante a execução do teste, todos os passos foram seguidos corretamente e o sistema registrou as faltas para cada aluno selecionado. A mensagem "Faltas inseridas com sucesso!" foi exibida na tela conforme esperado. Além disso, as informações sobre a frequência dos alunos e as comunicações com os alunos ausentes foram atualizadas corretamente no sistema. Todos os requisitos funcionais foram atendidos, e não foram observados erros ou problemas durante o processo de gerenciamento de faltas. |
| Data da última execução do teste                                  | 29/05/2023  às 23:05hrs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |



# Referências

_&lt;Lista de referências&gt;_ 
Plano de Teste:
SOMMERVILLE, I. Engenharia de software.
10. ed. São Paulo: Pearson, 2018, cap. 8.

https://cuboup.com/conteudo/plano-de-teste/

