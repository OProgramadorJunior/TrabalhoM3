
## Descrição

  O cliente necessita transformar seu site estático em um que seja possível alterar os cadastros sem precisar conectar no servidor para alterar os arquivos. Ele necessita cadastrar em multi plataforma devido ao aumento de novos imóveis para a venda. O cliente deseja melhorar ainda mais a facilidade de administração de seu site. O cliente então verificou a necessidade de ter ferramentas para auxilia-lo com essas tarefas, pois seu principal problema no site é a inflexibilidade para implementar itens da forma como ele deseja.
  
  
  A solução implementada para esse cliente foi pensada a fim de suprir as carências apresentadas. A opção que melhor se encaixou para solucionar esses problemas foram a de uma criação de uma RestAPI para que seja consumido por uma aplicação web, na qual tem a finalidade de auxiliar e facilitar as implementações que ele deseja, com a criação de quatro CRUDs.
  
  O cliente então verificou a necessidade de ter ferramentas para auxilia-lo com essas tarefas, pois seu principal problema no site é a inflexibilidade para implementar itens da forma como ele deseja. A solução implementada para esse cliente foi pensada a fim de suprir as carências apresentadas. A opção que melhor se encaixou para solucionar esses problemas foram a de uma criação de uma API Rest para auxiliar e facilitar as implementações que ele deseja, com a criação de dois CRUDs.

## Tecnologias
  Typescript
  NestJS
  TypeORM
  MongoDB

## Instalação

```bash
$ npm install
```

## Inicialização

```bash
$ npm run start

```
## RestAPI endpoint's
*Imovel
```bash
/imovel
/imovel, POST
/imovel, GET
/imovel/:id, GET
/imovel/:id, PATCH
/imovel/:id, DELETE
```
TipoNegocio
```bash
/tipo-negocio
/tipo-negocio, POST
/tipo-negocio, GET
/tipo-negocio/:id, GET
/tipo-negocio/:id, PATCH
/tipo-negocio/:id, DELETE
```
TipoImovel
```bash
/tipo-imovel
/tipo-imovel, POST
/tipo-imovel, GET
/tipo-imovel/:id, GET
/tipo-imovel/:id, PATCH
/tipo-imovel/:id, DELETE
```
Lead
```bash
/lead
/lead, POST
/lead, GET
/lead/:id, GET
/lead/:id, PATCH
/lead/:id, DELETE
```
