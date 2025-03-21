with recursive subcategorias as (
	select id, descricao, categoria_ID, 0 as nivel from categorias where categoria_ID is null
    union all
    select cat.id, cat.descricao, cat.categoria_ID, sub.nivel + 1 as nivel 
    from categorias cat
    join subcategorias sub on cat.categoria_ID = sub.ID
    
)

select * from subcategorias;


-- https://dev.mysql.com/doc/refman/8.4/en/with.html#common-table-expressions-recursive