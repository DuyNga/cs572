// 1. Find all the zip codes in Iowa state.
db.homework9.aggregate(
    [
        {$match:{state:"IA"}},
        {$project:{_id:0,"zip codes":"$_id"}}
    ]
)
// 2. Find all the zip codes with a population more than 1000.
db.homework9.aggregate(
    [
        {$match:{pop:{$gt:1000}}},
        {$project:{_id:0,"zip codes":"$_id"}}
    ]
)
// 3. Find all cities that have more than one zip code, sort the results based by
// state and city name.
db.homework9.aggregate(
    [
        {$group:{_id:{state:"$state", city:"$city"}, cnt:{$sum:1}}},
        {$match:{cnt:{$gt:1}}},
        {$sort:{"_id.state":1,"_id.city":1}},
        {$project:{_id:1}}
    ]
)
// 4. Display the least populated city in each state
db.homework9.aggregate(
    [
        {$group:{_id:{state:"$state", city:"$city"}, population:{$sum:"$pop"}}},
        {$sort:{"_id.state":1, population:1}},
        {$group:{_id:"$_id.state",city:{$first:"$_id.city"}, population:{$first:"$population"}}}
    ]
)