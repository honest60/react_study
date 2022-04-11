const React = require('react');
const { useState, useRef } = React;
// main branch commit 내역 
// main branch commit 내역2
const Gugudan = () => {              // setState 와 ref를 안쓸 경우, 보통 함수로 표현 -> 원래는 못쓰는데 가능하게 한게 Hooks 임
    // 해당 컴포넌트의 state는 반드시 Component 내부에 위치해야 함.
    // useState -> use 로 시작하는 게 Hook다.           push 테스트
    const [first, setFirst] = useState(Math.ceil(Math.random() *9));
    const [second, setSecond] = useState(Math.ceil(Math.random() *9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult(first + ' X ' + second + ' = ' + value + ' 정답!');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        }else {
            setResult('땡');
            setValue('');
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };
    
    console.log("렌더링");
    
    return (
        <>
            <div>{first} 곱하기 {second} 는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}/>
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
};

module.exports = Gugudan;