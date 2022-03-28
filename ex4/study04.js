 
//* Components와 Props

//1. 함수 컴포넌트와 클래스 컴포넌트
//  1) 함수 컴포넌트
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

//  2) 클래스 컴포넌트
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }

//2. 컴포넌트 렌더링
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    
    const element = <Welcome name="Sara" />;    //Welcome 참조
    ReactDOM.render(
        element,
        document.getElementById('root')
    );

//컴포넌트의 이름은 항상 대문자로 시작합니다.
//React는 소문자로 시작하는 컴포넌트를 DOM 태그로 처리합니다. 


