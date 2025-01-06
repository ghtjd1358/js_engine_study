// const add = (a, b) => {
//     return a + b
// };
const add = (a, b) => a + b; // { } 을 생략하면 return 도 생략가능

// const add = (a, b) => {a + b}; // return하는 것이 아닌 함수의 바디가 됨
// const add = (a, b) => ({a + b}); // 객체를 리턴하고 싶으면 (), {}를 감싸줘야함

function caculator(func, a, b) {
    return func(a, b)
} // 위에 함수들은 전부 함수 선언

add(3, 5);
caculator(add, 3, 5);// 여기서 add()가 아닌 add를 넣어야 함 
//만약에 add()를 대입한다면 caculator(undefined + undefined, 3, 5)가 되어버림 왜냐하면 매개변수도 안넣고 호출한 것이니깐!

document.querySelector('#header').addEventListener('click', add());// 클릭 안해도 실행이 됨, 함수오 함수호출은 다름
document.querySelector('#header').addEventListener('click', undefined + undefined);// 위에 콜백 함수는 지금 식과 같음, 즉 add() 함수가 아닌 함수의 리턴값을 호출하기 때문에 같다고 볼 수 있음

const onClick = () => {
    console.log('hello');
}

document.querySelector('#header').addEventListener('click', onClick());// 이상한 코드임, 왜냐하면 onClick은 return 값이 없기 때문에 undefined를 호출하는 것과 다를 게 없음

const onClick2 = () => (event) => {
    console.log('hello');
}

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