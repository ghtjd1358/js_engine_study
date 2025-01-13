// 스코프 체인

const x = 'x';

function c(){
    const y = 'y'
    console.log('c')
    function b(){
        const z = 'z';
        console.log('b');
        c();
    }
}

function a(){
    const x = 'x';
    console.log('a');
    b();
}

a(); 
c(); 
// a, c는 전역함수, b는 c의 호츨 스택 스코프

// 스코프 체인 분석 시 함수의 선언한 부분만 보면 되고 최고 부모 함수까지 올라가보자
// 정리하면 호출 스택은 호출만 스코프 체인은 선언만 확인한다고 생각하자
// 렉시컬 스코프 : 선언하고 한번 작성하면 바뀌지 않고 실행을 시켜도 코드는 바뀌지 않음!

// c -> anony
// a -> anony
// b -> c -> anony a함수에선 b를 실행할 수 없다. a 함수와 연관성이 없기 때문에...
// 하지만 b에선 a에 접근이 가능하다. 왜냐하면 부모 함수인 c가 a의 전역인 anony랑 겹치기 때문에...