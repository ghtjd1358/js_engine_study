// 호출 스택

const x = 'x';

function c(){
    const y = 'y'
    console.log('c')
}

function a(){
    const x = 'x';
    console.log('a');
   
    function b(){
        const z = 'z';
        console.log('b');
        c();
    }
    b();
}

a(); //a, b, c
c(); //c

// 단계	    호출된 함수	    출력	호출 스택 상태
// 1	    a()	         'a'	   [global] → a
// 2	    b()	         'b'	   [global] → a → b
// 3	    내부의 c()	  'c'	    [global] → a → b → c
// 4	    종료(c)		            [global] → a → b
// 5	    종료(b)		            [global] → a
// 7	    외부의 c()	  'c'	    [global] → c
// 8	    종료(c)		            [global] → ''	        

//stack = FILO
//quE =FIFO
// debugger => 호출 스택 확인, 빠져나가는 것을 막아줌

// 호출스택(STACK)은 호출일 때만 쓴다