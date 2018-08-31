UPDATE products SET description = $2,
WHERE products.id = $1;
