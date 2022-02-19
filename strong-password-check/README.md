# Desafio 02

## Verificador de senha forte.

Verifica se uma string pode ser considerada uma senha forte.

## O Desafio

Débora se inscreveu em uma rede social para se manter em contato com seus amigos.  
A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte.  
O site considera uma senha forte quando ela satisfaz os seguintes critérios:

- Possui no mínimo 6 caracteres.
- Contém no mínimo 1 digito.
- Contém no mínimo 1 letra em minúsculo.
- Contém no mínimo 1 letra em maiúsculo.
- Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&\*()-+

Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte.  
Para ajudar Débora,  
construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

## Ações do algoritmo

Será necessário iniciar um contador.  
Será necessário alterar o contador caso as verificações falhem.  
Verificar o tamanho do input(string).  
Verificar se o input(string) possui pelo menos 1 digito.  
Verificar se o input(string) possui pelo menos 1 letra minúscula.  
Verificar se o input(string) possui pelo menos 1 letra maiúscula.  
Verificar se o input(string) possui pelo menos 1 caractere especial(!@#$%^&\*()-+).  
Retornar a diferença entre o 6 e (tamanho do input + os caracteres que falta).

## Algoritmo em pseudocódigo

```
crie uma função que recebe uma string e retorna um número

inicie um numero com o nome quantidadeMinimaDeCaracteres
inicie um numero com o nome de tamanhoMínimo e atribua o valor de 6
inicie um numero com o nome caracteresQueFalta e atribua o valor de 0
inicie uma string com o nome de caracteresEspeciais e atribua o valor de '!@#$%^&*()-+'

se não houver um numero qualquer no input
  caracteresQueFalta recebe o valor atual mais um
se não houver uma letra minúscula no input
  caracteresQueFalta recebe o valor atual mais um
se não houver uma letra maiúscula no input
  caracteresQueFalta recebe o valor atual mais um
se não houver um dos caracteresEspeciais no input
  caracteresQueFalta recebe o valor atual mais um

se tamanho do input mais caracteresQueFalta for menor que o tamanhoMínimo
  quantidadeMinimaDeCaracteres recebe tamanhoMínimo menos o tamanho do input
se não
  quantidadeMinimaDeCaracteres recebe o caracteresQueFalta

retorne o numero quantidadeMinimaDeCaracteres
```

## Solução em javascript

A solução pode ser acessada [aqui](./strong-password-check.js).

## Testes

A suite de testes pode ser acessada [aqui](./strong-password-check.test.js).
