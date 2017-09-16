
# README

## how to populate the database

1. open the terminal and run: `sudo mongod`.
2. open another terminal and run: `mongo`.
3. in the previous terminal run: `use apiworkshop`.
4. copy this array to use it into the insertMany function in the next step.
```javascript
[
  {
    "urlPath": "lorem",
    "title": "Lorem",
    "price": 21,
    "rating": "4.5/5",
    "commentCount": 3
    },
    {
    "urlPath": "ipsum",
    "title": "Ipsum",
    "price": 15,
    "rating": "4.75/5",
    "commentCount": 1,
    "isTopRated": true
    },
    {
    "urlPath": "dolor",
    "title": "Dolor",
    "price": 32
    },
    {
    "urlPath": "sit",
    "title": "Sit",
    "price": 42
    },
    {
    "urlPath": "amet",
    "title": "Amet",
    "price": 12
    }
]
```
5. then run: **db.products.insertMany(***paste the previous array here***)**.
6. if you want to see how many documents you insert:- db.products.count().
7. if you want to see what you inserted run:- db.products.find().pretty().

## Database name is 
apiworkshop

## collection name is 
products
