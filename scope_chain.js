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


// 스코프 체인 분석 시 선언한 부분만 보면 되고 최고 부모 함수까지 올라가보자

// c -> anony
// a -> anony
// b -> c -> anony