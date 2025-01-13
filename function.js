// const add = (a, b) => {
//     return a + b
// };
const add = (a, b) => a + b; // { } 을 생략하면 return 도 생략가능

// const add = (a, b) => {a + b}; // return하는 것이 아닌 함수의 바디가 됨
// //함수의 return으로 선언하려면 ({a+b}) 처럼 괄호 () 로 return할 객체를 감싸야함

function caculator(func, a, b) {
    return func(a, b)
} 

add(3, 5);
caculator(add, 3, 5);// 여기서 함수인지, 함수의 호출을 넣어야하는지 헷갈린다면? add? add()?
//만약에 add()를 대입한다면 caculator(undefined + undefined, 3, 5) 이런식으로 머리로 return 값을 대체하면 헷갈리지 않음 왜냐하면 매개변수도 안넣고 호출한 것이니깐! 초보자들이 자주하는 실수라고 함!

document.querySelector('#header').addEventListener('click', add());// 클릭 안해도 실행이 됨, 함수오 함수호출은 다름
document.querySelector('#header').addEventListener('click', undefined + undefined);// 위에 콜백 함수는 지금 식과 같음, 즉 add() 함수가 아닌 함수의 리턴값을 호출하기 때문에 같다고 볼 수 있음

const onClick = () => {
    console.log('hello');
}

document.querySelector('#header').addEventListener('click', onClick());// 이상한 코드임, 왜냐하면 onClick은 return 값이 없기 때문에 undefined를 호출하는 것과 다를 게 없음

const onClick2 = () => (event) => {
    console.log('hello');
}
// 매개변수를 어디 넣을지 애매하면 return 값으로 대입해보면 명확하게 답이 나옴

document.querySelector('#header').addEventListener('click', onClick2());//맞는 코드

const onClick3 = () => {
    return () => {
        console.log('hello');
    };
} 
// 위의 고차함수와 onClick2,onClick3 동일한 코드임, 즉 이렇게 return () => {}을 아래에 대입해보면 알기 쉬움

document.querySelector('#header').addEventListener('click', onClick3());
// 위와 아래는 동일한 코드임
document.querySelector('#header').addEventListener('click', () => {
    console.log('hello');
});

// 즉, 함수의 호출은 return 값으로 대체하면 알기 쉬움