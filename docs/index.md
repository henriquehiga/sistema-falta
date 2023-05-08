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

![Sistema de Falta](https://user-images.githubusercontent.com/89753145/232635073-2c48705d-8833-4be8-9315-ce4b02c86a53.jpg)


# Descrição dos casos de uso
| Identificação      | Gerenciar Faltas                                        |
|--------------------|---------------------------------------------------------|
| UC 01              | Estabelecer marcação de faltas                          |
| Ator               | Professor                                               |
| Entradas           | Categoria escolhida para aplicação de faltas acadêmicas |
| Fluxo Alternativo  | Não Existente                                           |
| Pontos de Inclusão | 1 Existente                                             |
| Pontos de Extensão | 1 Existente                                             |
| Pré-Condições      | O Aluno não deverá faltar, está com excesso de faltas   |

![Descrição Caso de Uso_page-0001](https://user-images.githubusercontent.com/89753145/219905395-577b006e-1dd1-47fa-a27d-4de72edcd080.jpg)
![Descrição Caso de Uso_page-0002](https://user-images.githubusercontent.com/89753145/219905398-2c4aeaf6-3812-466a-9728-af68e80285c4.jpg)
![Descrição Caso de Uso_page-0004](https://user-images.githubusercontent.com/89753145/219905399-ca3e750f-6580-43e3-ae10-5d5e5236c59d.jpg)
![Descrição Caso de Uso_page-0005](https://user-images.githubusercontent.com/89753145/219905401-3beaac34-63cc-402f-9649-18ab62c05a23.jpg)

# Protótipos de tela

![1 (1)](https://user-images.githubusercontent.com/89232973/229906809-1d04a8bc-a265-42a2-a2e7-6eb817056b11.png)
![2](https://user-images.githubusercontent.com/89232973/229906853-4845acfe-680a-4fa8-a010-242e89551d4b.png)
![3](https://user-images.githubusercontent.com/89232973/229906889-5f542cd4-761e-47ff-898c-c1f300864895.png)
![4](https://user-images.githubusercontent.com/89232973/229906923-020a8107-beb0-4d32-ad48-e8c3795ea76b.png)
![5](https://user-images.githubusercontent.com/89232973/229906961-cbaa92fa-22d0-4a97-9eb9-ca8441955a1f.png)
![6](https://user-images.githubusercontent.com/89232973/229907002-1f0ae95e-8939-4b2d-8d14-d5d643e7995a.png)
![7](https://user-images.githubusercontent.com/89232973/229907461-1c29cf4f-b46b-4c8d-ae6e-f22952af74da.png)


# Modelo de domínio

https://github.com/codehiga/sistema-falta/blob/develop/docs/Diagrama%20de%20Dom%C3%ADnio.drawio.png

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
