import { Component } from "react";

class ClickMe extends Component {
  render(){
    return (
      <div>
        클릭 횟수 X 5: 15
        <button>클릭</button>
      </div>
    );
  }
}

class Parent extends Component {
  render(){
    return (
      <div>
        <h1>01 클래스 컴포넌트</h1>
        <ClickMe />
      </div>
    );
  }
}

export default Parent;