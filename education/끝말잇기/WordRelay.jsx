const React = require('react');
const { Component } = React;

class WordRelay extends Component {
    state = {
        word: '어니참',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {  //이걸 value[0] 이렇게는 못쓰나?
            this.setState({
                result: '딩동댕',
                word: this.state.value,
                value: '',
            });
        } else {
            this.setState({
                result: '땡',
                value: '',
            })
        }
        this.input.focus();
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value })
    };

    input;
    onRefInput = (c) => {
        this.input = c;
    };

    // input 태그에서 value와 onChange는 세트입니다.
    // 그게 아니면 degfaultValue={this.state.value} 를 사용해야 함
    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay;