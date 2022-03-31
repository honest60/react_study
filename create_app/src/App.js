/* 
  App.js 파일은 세 개의 부분으로 나뉜다.
  1. import 문        : 상단에 위치
  2. App 컴포넌트    : 중앙에 위치
  3. export 문        : 하단에 위치 (App 컴포넌트들을 다른 모듈에서 사용할 수 있게 하기 위함.)

*/
//import React from 'react';    : JSX를 React.createElement()로 변환하기 위해 필수임.
import logo from './logo.svg';
import cat from './cat.jpg';
/*
import './App.css';
function Header(props) {
  console.log('props',props,props.title)
  return  <header>
      <h1><a href="/">{props.title}를 시작해 볼까요?</a></h1>
    </header>
}
*/

// event 기능 start
import './App.css';
function Header(props) {
  console.log('props',props,props.title)
  return  <header>
      <h1><a href="/" onClick={(event)=>{ //Reload 발생하지 않게.. function(event){} 를 (event)=>{} 로 사용가능
        event.preventDefault(); //a태그의 기본동작 방지 : 클릭시 reload 방지
        props.onchangeMode(); //함수 호출
        alert("눌렀습니다.");
      }}>{props.title}</a></h1>
    </header>
}
// event 기능 end 

/*
function Nav() {
  return  <nav>
      <ol>
        <li><a href="/read/1">html</a></li>
        <li><a href="/read/2">css</a></li>
        <li><a href="/read/3">js</a></li>
      </ol>
    </nav>
}
*/
function Nav(props) {
  const lis = []

  for(let i=0;i<props.topics.length;i++){
    let t = props.topics[i];
    lis.push(
      <li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event=>{
          event.preventDefault();

          props.onchangeMode(event.target.id); 
          //props.onchangeMode(t.title); 
          // onchangeMode 는 보낸 측(<Nav>) 과 
          // 받는 측[props.onchangeMode()] 둘 다 있어야 함.
        }}>{t.title}  ({t.body})
        </a>
      </li>
    );
  }
  return  <nav>
      <ol>
        {lis}
      </ol>
    </nav>
}
/*
function App() {
  const topics = [
    {id:1, title: "Html5",body: "html is..."},
    {id:2, title: "Css3",body: "css is..."},
    {id:3, title: "JavasScriptX",body: "javascript is..."}
  ]//const는 변수 변경 할수 X, 배열에 담음..
  return (
    <div>
    <Header title="WEB" onchangeMode={function(){
        alert('Header 선택됨');
      }
    }></Header>
      <Nav topics={topics} onchangeMode={(title)=>{alert(title);}}></Nav> 
      <Article title="Welcome" body="Hello,WEB"></Article>
    </div>
  );
}
*/
function App() {
  const mode = 'READ';

  const topics = [
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javasscript", body: "javascript is..." }
  ]

  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello,WEB"></Article>
  } else if (mode === 'READ') {
    content = <Article title="Read" body="Hello,Read"></Article>
  }
  return (
    <div>
      <Header title="WEB" onchangeMode={() => {
        alert('Header');
      }}></Header>
      <Nav topics={topics} onchangeMode={(id) => { alert(id); }}></Nav>
      {content}
    </div>
  );
}

function Article(props) {
  return <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
}

function App2(props) {
  const subject = props.subject;
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <img src={cat} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          새로 만든 테스트~, {subject}!
        </a>
        
      </header>

      <p> * 컴포넌트는 필요한 모듈을 불러오고 <br></br>그들 자신을 파일의 하단에서 내보낼 수 있습니다.</p>
      <p> * 컴포넌트 함수는 PascalCase로 명명합니다.</p>
      <p> * JSX 변수는 중괄호 so 중괄호와 같이 중괄호 사이에 넣어 읽을 수 있습니다.</p>
      <p> *  HTML의 class는 JSX에서는 className입니다.</p>
      <p> * props는 컴포넌트 호출에 속성처럼 쓰이고, 컴포넌트로 전달됩니다.</p>
    </div>
  );
}  

export default App2;   // App 컴포넌트들을 다른 모듈에서 사용할 수 있게 하기 위함.

