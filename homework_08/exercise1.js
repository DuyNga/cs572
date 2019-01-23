
    // 1. Write a MongoDB query to display all the documents in the collection
    // restaurant.
    db.homework8.find({})

    // 2. Write a MongoDB query to display the fields restaurant_id, name, district and
    // cuisine for all the documents in the collection restaurant.
    db.homework8.find({},{restaurant_id:1, name:1, district:1, cuisine:1}).pretty()

    // 3. Write a MongoDB query to display the fields restaurant_id, name, district and
    // cuisine, but exclude the field _id for all the documents in the collection
    // restaurant
    db.homework8.find({},{restaurant_id:1, name:1, district:1, cuisine:1,_id:0}).pretty()

    // 4. Write a MongoDB query to display the fields restaurant_id, name, district and
    // zipcode, but exclude the field _id for all the documents in the collection
    // restaurant
    db.homework8.find({},{restaurant_id:1, name:1, district:1, 'address.zipcode':1,_id:0}).pretty()
    // 5. Write a MongoDB query to display all the restaurant which is in the district
    // Bronx
    db.homework8.find({district:'Bronx'},{}).pretty()
    // 6. Write a MongoDB query to display the first 5 restaurant which is in
    // the district Bronx
    db.homework8.find({district:'Bronx'},{}).limit(5) 
    // 7. Write a MongoDB query to display the next 5 restaurants after
    // skipping first 5 which are in the district Bronx.
    db.homework8.find({district:'Bronx'},{}).limit(5).skip(5)
    // 8. Write a MongoDB query to find the restaurants which locates in
    // coord value less than -95.754168.
    db.homework8.find({'address.coord':{$elemMatch:{$lt:-95.754168}}}).pretty()
    // 9. Write a MongoDB query to find the restaurants that does not
    // prepare any cuisine of 'American' and their grade score more than
    // 70 and coord value less than -65.754168.
    db.homework8.find({cuisine: {$not:{$eq:"American "}}, 'grades.score':{$gt:70}, 'address.coord':{$elemMatch:{$lt:-65.754168}}}).pretty()
    // 10. Write a MongoDB query to find the restaurant Id, name, district and
    // cuisine for those restaurants which contains 'Wil' as first three
    // letters for its name.
    db.homework8.find({name:/^Wil/},{_id:0, restaurant_id:1,name:1, district:1, cuisine:1})
    // 11. Write a MongoDB query to find the restaurant Id, name, district and
    // cuisine for those restaurants which contains 'ces' as last three
    // letters for its name.
    db.homework8.find({name:/ces$/},{_id:0, restaurant_id:1,name:1, district:1, cuisine:1})
    // 12. Write a MongoDB query to find the restaurant Id, name, district and
    // cuisine for those restaurants which contains 'Reg' as three letters
    // somewhere in its name.
    db.homework8.find({name:/Reg/},{_id:0, restaurant_id:1,name:1, district:1, cuisine:1})
    // 13. Write a MongoDB query to find the restaurants which belongs to
    // the district Bronx and prepared either American or Chinese dish.
    db.homework8.find({district:"Bronx", cuisine: {$in:["American ","Chinese"]}}).count()
    // 14. Write a MongoDB query to find the restaurant Id, name, district and
    // cuisine for those restaurants which belongs to the district Staten
    // Island or Queens or Bronx or Brooklyn.
    db.homework8.find({district:{$in:["Staten","Island","Queens","Bronx","Brooklyn"]}},{_id:0, restaurant_id:1,name:1, district:1, cuisine:1}).count()
    // 15. Write a MongoDB query to find the restaurant Id, name, district and
    // cuisine for those restaurants which are not belonging to the district
    // Staten Island or Queens or Bronx or Brooklyn.
    db.homework8.find({district:{$not:{$in:["Staten","Island","Queens","Bronx","Brooklyn"]}}},{_id:0, restaurant_id:1,name:1, district:1, cuisine:1}).count()
    // 16. Write a MongoDB query to find the restaurant Id, name, district and
    // cuisine for those restaurants which achieved a score which is NOT MORE THAN 10.
    db.homework8.find({'grades.score':{$lt:10}},{_id:0, restaurant_id:1,name:1, district:1, cuisine:1}).count()
    // 17. Write a MongoDB query to find the restaurant Id, name, address
    // and geographical location for those restaurants where 2nd element      XXXXXXX
    // of coord array contains a value which is MORE THAN 42 and up to 52.
    db.homework8.find({'address.coord.1':{$gt:42, $lte:52}},{_id:0, restaurant_id:1,name:1, address:1}).count()
    // 18. Write a MongoDB query to arrange the name of the restaurants in
    // ascending order along with all the columns.
    db.homework8.find().sort({name:1})
    // 19. Write a MongoDB query to arrange the name of the restaurants in
    // descending order along with all the columns.
    db.homework8.find().sort({name:-1})
    // 20. Write a MongoDB query to arrange the name of the cuisine in
    // ascending order and for those same cuisine district should be in
    // descending order.
    db.homework8.find().sort({cuisine:1, district:-1})
    // 21. Write a MongoDB query to know whether all the addresses
    // contains the street or not.
    db.homework8.find({'address.street':{$exists:1}}).count()
    // 22. Write a MongoDB query which will select all documents in the
    // restaurants collection where the coord field value is Double.
    db.homework8.find({'address.coord':{$elemMatch:{$type:"double"}}})
    // 23. Write a MongoDB query to find the restaurant name, district,
    // longitude and latitude and cuisine for those restaurants which
    // contains 'Mad' as first three letters of its name.
    db.homework8.find({name:/^Mad/},{_id:0, restaurant_id:1,name:1, district:1,'address.coord':1, cuisine:1})
