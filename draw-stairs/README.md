# Desafio 01

## Escada de asteriscos e espaços

Desenhe uma escada de asteriscos e espaços.

## O Desafio

Escreva um algoritmo que mostre na tela uma escada de tamanho n utilizando o
caractere \* e espaços.  
A base e altura da escada devem ser iguais ao valor de n.  
A última linha não deve conter nenhum espaço.

## Ações do algoritmo

Será necessário criar uma string.  
Será necessário manipular a string.  
Será necessário exibir a string n vezes.

## Algoritmo em pseudocódigo

```
crie uma função que recebe um número e não retorna dados

crie uma string que recebe n caracteres de espaço, sendo n o número recebido pela função

crie um laço que será verdade enquanto houver caracteres de espaço na string inicial
  crie uma substring usando a string inicial a partir do segundo caractere até o final
  adicione um caractere de asterisco no final da substring
  Reassine o valor da string inicial com o valor da substring
  exiba a string inicial
```

## Solução em javascript

A solução pode ser acessada [aqui](./draw-stairs.js).

## Testes

A suite de testes pode ser acessada [aqui](./draw-stairs.test.js).
