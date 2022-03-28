/*  * 엘리먼트 렌더링
    React 앱의 가장 작은 단위.
*/    
    <div id="root"></div> //--> 루트(root) DOM 노드

    * ReactDOM.render() 
    //-> React 엘리먼트를 루트 DOM 노드에 렌더링함. 
    
    //ex)
    const element = <h1>Hello, world</h1>;                          
    ReactDOM.render(element, document.getElementById('root'));   
    
    //* 주기적으로(매 초마다) 변경할 경우
    setInterval() //콜백을 이용해 초마다 ReactDOM.render()를 호출
    //- 매초 전체 UI를 다시 그리도록 만들더라도,
    //  ReactDOM은 내용이 변경된 부분만 변경 작업함.

    //ex)
    function tick() {
    const element = (
        <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
    }

    setInterval(tick, 1000);


