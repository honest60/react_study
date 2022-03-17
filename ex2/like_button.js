'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }
  
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container') //해당 class에 대해 전부 찾기

.forEach(domContainer => { //querySelectorAll 이녀석이 자동으로 만드는 듯 
    // Read the comment ID from a data-* attribute.
    //const commentID = parseInt(domContainer.dataset.commentid, 10); //원본
    const commentID = parseInt(domContainer.dataset.cham, 8); // radix 2 -> 2개 (0,1)만 허용
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }), //내부에서 해당 값, 사용하기위해 변수 선언,처리 (13번째줄)
      domContainer  //25번째 줄에 대해 특정 변수(domContainer)에 선언 후, 초기화 하지 않아도 인식하나? 
    );
  });
