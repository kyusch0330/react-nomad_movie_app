import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push("/"); //뒤로 이동
    }
  }
  render(){
    const { location } = this.props;
    //render는 componentDidMount보다 먼저 실행되므로 state가 없을 가능성이 있으므로 체크
    if(location.state) {
      return (
        <span>{location.state.title}</span>
      );
    }
    else return null;
  }
}

export default Detail;