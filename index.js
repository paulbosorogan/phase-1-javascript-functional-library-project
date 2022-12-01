function standardizeInput(collection){
    return (collection instanceof Array) ? collection : Object.values(collection)
}

function myEach(collection, callback){
    const newCollection = standardizeInput(collection) 
    for(let i=0; i<newCollection.length; i++){
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback){
    const collectionTest = standardizeInput(collection)
    const newCollection = []
    for(let i=0; i<collectionTest.length; i++){
        callback(collectionTest[i])
        const pushedColl = callback(collectionTest[i])
        newCollection.push(pushedColl)
    }
    return newCollection
}

function myReduce(collection, callback, acc){
let collectionTest = standardizeInput(collection)
if(!acc){
    acc = collectionTest[0]
    collectionTest = collectionTest.slice(1)
}
for(let i=0; i<collectionTest.length; i++){
   acc = callback(acc,collectionTest[i],collectionTest)
}
return acc
}

function myFind(collection, predicate){
const collectionTest = standardizeInput(collection)
for(let i=0; i<collectionTest.length; i++){
    if(predicate(collectionTest[i])){
        return collectionTest[i]
    }}
return undefined
}

function myFilter(collection, predicate){
const collectionTest = standardizeInput(collection)
let array = []
for(let i=0; i<collectionTest.length; i++){
    if(predicate(collectionTest[i])){
        array.push(collectionTest[i])
    }}
return array
}


function mySize(collection){
const collectionTest = standardizeInput(collection)
let counter = 0
for (let i=0; i<collectionTest.length; i++){
if((collectionTest[i]) !== '0') counter++
}
return counter
}

function myFirst(array,n = false){
    let elem = []
    if(!n){
        elem = array[0]
    }else{
        elem = array.slice(0,n)}
    return elem
}

function myLast(array, n = false){
    let elem = []
    if(!n){
        elem = array[array.length-1]
    }else{
        elem = array.slice(array.length -n)
    }
    return elem
}
function myKeys(object){
    let array = (Object.keys(object))
    return array
}
function myValues(object){
    let array = (Object.values(object))
    return array
}