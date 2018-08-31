INSERT into products (imageurl, name, price)
VALUES ($1, $2, $3) RETURNING *
