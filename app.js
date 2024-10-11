// 基本

// Q1
let nickname = 'ごっしー';
let age = 28;
let greet = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';
console.log(greet);

// Q2
let languages  = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
console.log(`私の好きな言語は`,languages[0],`です。次は`,languages[3],`を勉強してみたいです。`)
console.log(languages[0]);

// Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

// Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]); 

// Q5
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

let totalage = 0;
for (let i = 0; i < playerList.length; i++) {
  totalage += playerList[i].age;
}

console.log(totalage / playerList.length);

// Q6
function sayHello() {
  console.log('Hello')
}
sayHello()

const sayworld = function() {
   console.log('world')
};

sayworld ()

// Q7
user.birthday = '2000-09-27',
user.sayHello = function() {
  console.log('Hello！' + ' ' + user.name);}

user.sayHello();

// Q8
let calc = {
  add: function (x,y) {
    console.log(x + y);
  }
};
calc.add(1,6);

calc = {
  subtract: function (x,y) {
    console.log(x - y);
   }
}
calc.subtract(20,10);

calc = {
  multiply : function (x,y) {
    console.log(x * y);
   }
}
calc. multiply (7,7);

calc = {
  divide : function (x,y) {
    console.log(x / y);
   }
}
calc. divide (5,1);

// Q9
function remainder(x,y) {
  let division= x + 'を' + y + 'で割った余りは' + x % y + 'です';
  return division;
}
console.log(remainder(5,3));

// Q10
// 関数内で定義した変数は、その関数内だけスコープが有効である。
// Q10の変数xは関数fooの中で定義しているので、関数fooの外で使おうとするとエラーが出る。
// 変数を関数の外でも使いたい場合は、変数を関数の外で定義し、関数の中から参照できるようにする必要がある。

let x = 0;
foo()

function foo() {
 x = 1;
 console.log(x);}

console.log(x);

// 上記のように変数xを関数foo外で定義し、関数foo内で再代入すると、それ以降の変数xは再代入された値になる。


// 応用

// Q1
let random = Math.floor(Math.random() * 10);
console.log(random)

// Q2
function Hello() {
  console.log('Hello World!');
}

setTimeout(Hello, 3000);

// Q3
let num = -0.1;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}


// Q4
let number= []; 

for (let i = 0; i <= 99; i++){
  number[i] = i
  console.log(number[i])
}

// Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
  console.log(mixed[i]);
  if (typeof mixed[i] !== 'number') {
    console.log('not number');
    }else if(mixed[i] % 2 === 1){
      console.log('odd');
    }else if(mixed[i] % 2 === 0) {
      console.log('even');}
}

 
