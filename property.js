const bottle = { name:'RFL', price :60, hold: 'water'}
const keys = Object.keys(bottle)
console.log(keys);
const values = Object.values(bottle)
console.log(values);
const pairs = Object.entries(bottle)
console.log(pairs);
Object.seal(bottle)
delete bottle.hold;
console.log(bottle);

for(const prop in bottle){
    console.log ( prop ,bottle[prop]);
}

const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 



