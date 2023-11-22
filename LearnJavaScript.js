let Name = 'Ankit'
const lName = 'Kumar'
var flName = 'Ayush Arya'
city = 'Delhi'
let genral;
//console.table(Name)

let a = '33'
let b = Number(a)
//console.table([typeof a,typeof b]);

let aa = 'asa'
let bb = Boolean(aa)
//console.table([ aa,  bb]);

// console.log(('1' + '2') + (3 + 4));
let myObj = [1,2,3]
// console.log(typeof myObj);

let myBigint = 7772772774664648288n
// console.log(typeof myBigint);

let att = '        hello          ankit how are you ankit       '
// let findVal = new String(att)
// console.log(att.trim())

let number = 10
let minNum = 5
//console.log(Number.isFinite(minNum/number));

function intger(x,y){
    if(Number.isInteger(x/y)){
        return 'Hello Ankit'
    }
    return 'Fuck off'
}
//console.log(intger(10,5));
let parseFlVal = '55.11'
let convert = Number.parseInt(parseFlVal)
//console.log(typeof convert);
function toFix(x){
    return Number.parseFloat(x).toFixed(1)
}
//console.log(toFix(123.456))

let mathNum = 0.55
//console.log(Math.floor(mathNum));

let minMax = [-1,-2,-3]
//console.log(Math.min(1,2,3));

let pow1 = 7
let pow2 = 3
//console.log(Math.pow(pow1,pow2));

let rand = Math.random()
let abc = Number.parseInt(Math.floor(rand * 10   )+ 1.55548 )
//console.log( abc.toFixed(4)   );

let round1 =55
let round2 = 5
//console.log(Math.sqrt(round1*round2))

let myDate = new Date()
//console.log(new Date());
//console.log(myDate.toUTCString());

//array

let fArr = [1,2,3]
let sArr = [4,5,6]
let cArr = fArr.entries()
//console.log(cArr)

let everyFunc = (everyF)=> everyF < 4 ;
//console.log(sArr.every(everyFunc));

let fillArr = [0,1,2,3,4,5,6]
//console.log(fillArr.fill(1,2,5))

let filterArr = ['Ankit','Rishabh','Anshika','Ayush','Ayushmaan','Tony']
let newFilter = filterArr.filter((val) => {return val.length >= 5})
//console.log( newFilter);

let findArr = [1,2,3,4,5]
let newFind = findArr.find((val)=> val >3)
//let newFind = findArr.findIndex((val)=> val >3)
//console.log(newFind);

let findLastArr = [1,2,3,4,5]
//let newLastArr = findLastArr.findLast((val) => val > 3)
let newLastArr = findLastArr.findLastIndex((val) => val > 3)
//console.log(newLastArr);

let flatArr = [1,[2,[3,[4,[5]]]]]
let newFlatArr = flatArr.flat(Infinity)
//console.log(newFlatArr);

let flatMapArr = [1,2,3,1]
let newFlatMapArr = flatMapArr.flatMap((val) => val === 2? [5,6] : 0)
//console.log(newFlatMapArr);

let forEachArr = ['a','b','c','d']
//forEachArr.forEach((val) =>console.log(val))

let joinArr = [1,2,3,4,5]
let newJoinArr = joinArr.join('/')
//console.log(newJoinArr);
let getKeyArr = joinArr.keys()
// for(let key of getKeyArr){
//     console.log(key)
// }


let mapArr = [2,3,4,5]
let newMapArr = mapArr.map((val) => val * 2)
//console.log(newMapArr)

let popArr = [1,2,3,4,5]
let newPopArr = popArr.pop()
// console.log(newPopArr)
// console.log(popArr)

let pushArr = [1,2,3,4,5]
let newPushArr = pushArr.push(6)
// console.log(newPushArr)
// console.log(pushArr)

let sortArr = [2,333,4,55,11111]
let newSortArr = sortArr.sort()

let sortArr1 = ['Ankit','Deepa','Jyoti','Sachin','Pooja']
let newSortArr1 = sortArr1.sort()
//console.log(newSortArr1);

let spliceArr = [1,2,3,4,5]
spliceArr.splice(1,2,9)
//console.log(spliceArr)

//Object ===================
let assignObj1 = {1:'a',2:'b'}
let assignObj2 = {3:'a',4:'b'}
let assignObj3 = {5:'a',6:'b'}
let newAssignObj = Object.assign({},assignObj1,assignObj2,assignObj3)
// console.log(newAssignObj);
// console.log(assignObj1);

let personObj = {
    isHuman:false,
    prinIntro:function(){
        console.log(`my name is ${this.name} i m human ${this.isHuman}`)
    }
}
let meObj = Object.create(personObj)
meObj.name = 'Ankit'
meObj.isHuman= true;
meObj.prinIntro()

let hasOwnObj = {1:'a',2:'b'}
//console.log(Object.hasOwn(hasOwnObj,1));

let destruObj = {name:'Ankit',age:26,emailId:'ankit@gmail.com'}
let {name: n , age: ag, emailId: e} = destruObj;
//console.log(n + ag + e);

// functions ============================
let nameTwo = 'Ayush'
let namethree = 'Kumar'
function one(){
    namethree = 'Verma'
    function two(){
        namethree = 'Lodhi'
        nameTwo = 'Rishab'
        function three(){
            nameTwo = 'Hemant'
            namethree = 'Rajpoot'
            // console.log('three func ' + nameTwo)
            // console.log(namethree);
        }
        
        // console.log('two func ' + nameTwo)
        three()
        
    }
    // console.log(nameTwo)
    
    two()
}
one();

(function chai(){
    console.log('Hello ankit')
})();
