## Users

- id
- name
- email
- password
- phone
- country
- address
- city
- orders_id: 1:N con orders (OneToMany)

## Products

- id
- name
- description
- price
- stock
- imgUrl
- category_id: N:1 (ManyToOne)
- orderDetails: N:N (ManyToMany)

## Categories

- if
- name
- products: 1:N (OneToMany)

## Orders

- id
- user_id: N:1 (ManyToOne)
- orderDetails: 1:1 (OneToOne)

## OrderDetails

- id
- price
- order_id: 1:1 (OneToOne)
- products: N:N (ManyToMany)
