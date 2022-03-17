'use strict';

const e = React.createElement;  //React 요소 생성

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return '변경되었습니다.'; //기본값 true 일때
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      '눌러주세요'
    );
  }
}

const domContainer = document.querySelector('#like_button_container'); //해당 id 부분 찾기
ReactDOM.render(e(LikeButton), domContainer); //해당 id 부분에/React 요소로 생성한(e)에/버튼(LikeButton) 추가