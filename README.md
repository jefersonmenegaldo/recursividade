# Projeto de Exemplos de Algoritmos e Consultas

Este projeto contém exemplos de algoritmos em JavaScript e uma consulta SQL recursiva. Os arquivos incluídos no projeto são:

## Estrutura do Projeto

- `ConsultaRecursiva.sql`: Contém uma consulta SQL recursiva para listar subcategorias de uma tabela de categorias.
- `Fatorial.js`: Implementa uma função para calcular o fatorial de um número.
- `Fibonacci.js`: Implementa uma função para calcular a sequência de Fibonacci.
- `Modelo.mwb` e `Modelo.mwb.bak`: Arquivos de modelo (provavelmente para um banco de dados).

## Descrição dos Arquivos

### ConsultaRecursiva.sql

Este arquivo contém uma consulta SQL que utiliza uma expressão de tabela comum recursiva (CTE) para listar subcategorias de uma tabela de categorias.

```sql
with recursive subcategorias as (
    select id, descricao, categoria_ID, 0 as nivel from categorias where categoria_ID is null
    union all
    select cat.id, cat.descricao, cat.categoria_ID, sub.nivel + 1 as nivel 
    from categorias cat
    join subcategorias sub on cat.categoria_ID = sub.ID
)

select * from subcategorias;