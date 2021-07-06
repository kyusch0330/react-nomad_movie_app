import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if(location.state === undefined) {
      history.push("/"); //뒤로 이동
    }
  }
  render(){
    const { location: { state } } = this.props;
    //render는 componentDidMount보다 먼저 실행되므로 state가 없을 가능성이 있으므로 체크
    if(state) {
      return (
        <div className="detailContainer">
          <img src={state.poster} alt={state.title} title={state.title}/>
          <div><div className="title">{state.title}</div> ({state.year})</div>
          <ul className="genres">-
            {
              state.genres.map((genre, index) => 
              <li key={index}>&nbsp;{genre}
              {(index===state.genres.length-1)?"":" / "}
              </li>)
            }
          </ul>
          <p className="summary">{state.summary}</p>
        </div>
      );
    }
    else return null;
  }
}

export default Detail;