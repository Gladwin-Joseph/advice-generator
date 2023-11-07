import React from "react";
import axios from "axios";
import "./App.css";

const url = "https://api.adviceslip.com/advice";
class App extends React.Component {
  state = { advice: "" };
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get(url)
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="App">
        <div className="card">
          <h1 className="heading"> {advice} </h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>I Want Advice!!!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
