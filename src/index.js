import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Toaster from "./toaster";
import { events, intents } from "src/utils/constants";

const isElement = document.getElementById("toast-root");
if (isElement === null) {
  var div = document.createElement("div");
  div.id = "toast-root";
  document.body.appendChild(div);
}
/* Adding three event listeners for actions */
const successEvent = new Event(events.SUCCESS);
const dangerEvent = new Event(events.DANGER);

let currentMsgToDisplay = "Your message here";
console.log("events", events);
class App extends React.Component {
  state = {
    show: false,
    currentIntent: intents.PRIMARY,
    textContent: ""
  };

  componentDidMount() {
    const elem = document.getElementById("toast-root");

    /* Add event listener for events of success and danger 
    and pass respective intents necessary */
    elem.addEventListener(events.SUCCESS, () =>
      this.showToast(intents.SUCCESS, currentMsgToDisplay)
    );
    elem.addEventListener(events.DANGER, () =>
      this.showToast(intents.DANGER, currentMsgToDisplay)
    );
  }

  componentWillUnmount() {
    const elem = document.getElementById("toast-root");

    elem.removeEventListener(events.SUCCESS, this.closeToast);
    elem.removeEventListener(events.DANGER, this.closeToast);
  }

  showToast = (intent, text) => {
    this.setState({ show: true, currentIntent: intent, textContent: text });
  };

  closeToast = () => {
    this.setState({ show: false });
  };

  handleOnClick = () => {
    const elem = document.getElementById("toast-root");
    elem.dispatchEvent(successEvent);
    // this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div id="app-toast" className="App">
        {/* <button onClick={this.handleOnClick}>Open</button> */}
        {this.state.show && (
          <Toaster
            {...this.props}
            textContent={this.state.textContent}
            intent={this.state.currentIntent}
            closeToast={this.closeToast}
          />
        )}
      </div>
    );
  }
}

export default App;

const elem = document.getElementById("toast-root");

export const toast = {
  success: function(param) {
    /* Set local variable to passed parameter value */
    currentMsgToDisplay = param;
    elem.dispatchEvent(successEvent);
  },
  error: function(param) {
    /* Set local variable to passed parameter value */
    currentMsgToDisplay = param;
    elem.dispatchEvent(dangerEvent);
  }
};

// setTimeout(() => {
//   toast.error("Please hack");
// }, 2000);
const rootElement = document.getElementById("toast-root");
// ReactDOM.render(<App />, rootElement);
