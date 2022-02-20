# Desafio 03

## Quantidade de substrings que são anagramas.

Retorna a quantidade de substrings que são anagramas em uma string.

## O Desafio

Duas palavras podem ser consideradas anagramas de si mesmas se  
as letras de uma palavra podem ser realocadas para formar a outra palavra.  
Dada uma string qualquer,  
desenvolva um algoritmo que encontre o número de pares de substrings que são anagramas.

## Ações do algoritmo

Iniciar um contador.
Aumentar o contador sempre que os pares forem anagramas.
Extrair as substrings da string.
Organizar os possíveis pares das substrings.
Criar uma função que vai verifica se os pares são anagramas.

## Algoritmo em pseudocódigo

```
%função retornaAQuantidadeDeAnagramas%
crie uma função que recebe uma string e retorna um número

inicie um numero com o nome substringQueSãoAnagramas e atribua o valor de 0
iniciar um array de strings com o nome de substrings e atribua o valor da função retornaSubstrings
iniciar um array de array de strings con nome paresDeSubstrings e atribua o valor da função retornaParesDeSubstrings

Para cada par no array paresDeSubstrings
  Se os pares são anagramas
    Adicione um ao substringQueSãoAnagramas

retorne substringQueSãoAnagramas
```

## Solução em javascript

A solução pode ser acessada [aqui](./get-numbers-of-anagrams.js).

## Testes

A suite de testes pode ser acessada [aqui](./get-numbers-of-anagrams.test.js).
