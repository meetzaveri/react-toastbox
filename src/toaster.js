import React from "react";
import PropTypes from "prop-types";
import { timer, timePause, timeResume } from "src/utils/timer";

const classNames = require("classnames");

class Toast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      positionClasses: {
        top_right: false,
        top_left: false,
        top_center: false,
        bottom_right: false,
        bottom_left: false,
        bottom_center: false
      },
      paints: {
        success: false,
        warning: false,
        danger: false
      },
      timer: this.props.timerExpires
    };
  }

  componentDidMount() {
    /* Set timer for toast to dissappear */
    this.timeoutId = timer(this.props.closeToast, this.state.timer);
    console.log("this.timeoutId", this.timeoutId);

    let paints = { ...this.state.paints };
    let positionClasses = { ...this.state.positionClasses };
    let pos = "";

    const { intent, position } = this.props;

    switch (position) {
      case "top-right":
        pos = "top_right";
        break;
      case "top-left":
        pos = "top_left";
        break;
      case "bottom-right":
        pos = "bottom_right";
        break;
      case "bottom-left":
        pos = "bottom_left";
        break;
      default:
        break;
    }

    paints[intent] = true;
    positionClasses[pos] = true;

    this.setState({ positionClasses, paints });
  }

  getPosition = () => {
    const state = { ...this.state.positionClasses };
    let newObj = {};
    const values = Object.values(state);
    Object.keys(state).forEach((item, index) => {
      newObj[`toast_position_${item}`] = values[index];
    });
    // console.log("newObj", newObj);
    return newObj;
  };

  getIntent = () => {
    const state = { ...this.state.paints };
    let newObj = {};
    const values = Object.values(state);
    Object.keys(state).forEach((item, index) => {
      newObj[`toast_paint_${item}`] = values[index];
    });
    // console.log("newObj", newObj);
    return newObj;
  };

  closeToast = () => {
    this.props.closeToast();
  };

  handleMouseEnter = () => {
    console.log("on mouse over");
    timePause(this.timeoutId);
  };

  handleMouseLeave = () => {
    console.log("on mouse leave");
    this.timeoutId = timeResume(this.timeoutId, 4000, this.props.closeToast);
  };

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    const positionClasses = this.getPosition();
    const intentClasses = this.getIntent();
    const containerClass = classNames(
      { "toast-container": true },
      positionClasses
    );
    const toastIntent = classNames({ toaster: true }, intentClasses);
    // console.log("toastIntent", toastIntent);
    return (
      <React.Fragment>
        <div className={containerClass}>
          <div
            className={toastIntent}
            onMouseEnter={() => {
              this.props.pauseOnHover && this.handleMouseEnter();
            }}
            onMouseLeave={() => {
              this.props.pauseOnHover && this.handleMouseLeave();
            }}
          >
            <div className="toast-content-container">
              <div className="toast-content">{this.props.textContent}</div>
              <button className="fake-btn" onClick={this.closeToast}>
                &#x2716;
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Toast.defaultProps = {
  textContent: "Your message here",
  timerExpires: 6000,
  pauseOnHover: true
};

Toast.propTypes = {
  textContent: PropTypes.string,
  timerExpires: PropTypes.number,
  pauseOnHover: PropTypes.bool,
  closeToast: PropTypes.func
};

export default Toast;
