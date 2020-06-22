# react-toastbox

A minimal react toast box inspired by reddit's toast message design and react-toastify.

## Installation

[![NPM version](https://img.shields.io/badge/npm-1.2.6-brightgreen.svg)](https://www.npmjs.com/package/react-toastbox)

Using npm:

```
npm install react-toastbox
```

## How to use

1. Import main `Toastbox` from lib and you need to inject it once in your main bootstrapped file.

`main.js`

```js
import ToastBox from "react-toastbox";
.
.
.
<ToastBox timerExpires={5000} position="top-right" pauseOnHover={true} intent="success"/>

```

2. To use it in action, import `toast` method to call your toast message on screen.

`child.js`
```js
import { toast } from "react-toastbox";
.
.
.
handleClick = () => {
  /* Then when you want to show toast, call method and pass argument as text to display*/
  toast.success('Toast it up');
}
```

## Codesandbox demo

[Live Demo](https://codesandbox.io/s/epic-currying-62r0y)

## Screenshots

![Toaster](https://i.imgur.com/5CDEUf9.png)

## API

### `<ToastBox />`

#### Properties

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 60px;">name</th>
    <th style="width: 50px;">required</th>
    <th style="width: 50px;">type</th>
    <th style="width: 10px;">default</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <!-- <tr>
      <td>textContent</td>
      <td>String</td>
      <td>'Your message here'</td>
      <td>To display text content</td>
    </tr> -->
    <tr>
      <td>timerExpires</td>
      <td>no</td>
      <td>Number</td>
      <td>6000(in 'ms')</td>
      <td>Expiration time till toast message should be visible</td>
    </tr>
    <tr>
      <td>pauseOnHover</td>
      <td>no</td>
      <td>Boolean</td>
      <td>true</td>
      <td>On hovering toast, it's timer should be paused</td>
    </tr>
    <tr>
      <td>position</td>
      <td>no</td>
      <td>String</td>
      <td>'top-right'</td>
      <td>Position for toast to be displayed.</td>
    </tr>
    <tr>
      <td>intent</td>
      <td>no</td>
      <td>String</td>
      <td>'primary'</td>
      <td> Theme for toast message </td>
    </tr>
  </tbody>
</table>

### `toast`

#### Methods

`toast` is object containing methods for success and error(More to come soon).

- `toast.error('Error')` - Showing error toast message
- `toast.success('Success')` - Showing success toast message

## Possible values for API

```js
positionClasses = [
  "top-right",
  "top-left",
  "top-center",
  "bottom-right",
  "bottom-left",
  "bottom-center"
];
paints = ["success", "warning", "danger"];
```

## Quick API tour

In order to use toast box, you need to define component `<ToastBox/>` in root file which will listen for events(success,danger,etc), for example i.e. `App.js`.

Then when you want to show `error` or `success` message, just use `{toast}` method available from package. `toast.success('Yayy')`

### ToastBox

```js
import ToastBox from "react-toastbox";
.
.
.
<ToastBox timerExpires={5000} position="top-right" pauseOnHover={true} intent="success"/>

```

### { toast }

```js
import { toast } from "react-toastbox";
.
.
.
handleClick = () => {
  /* Then when you want to show toast, call method and pass argument as text to display*/
  toast.success('Toast it up');
}
```

## Usage

- Use `<ToastBox />` once in your app which listens to events such as success,error,etc...
  So in your root component(mainly `App.js` or `main.js`), register this component with suitable props acc. to your needs


In Nutshell,

```js
import React from "react";
import ReactDOM from "react-dom";
import ToastBox, { toast } from "react-toastbox";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* First define toastbox component which will listen to events*/}
      <ToastBox
        timerExpires={5000}
        position="top-right"
        pauseOnHover={true}
        intent="success"
      />
      <button
        onClick={() => {
          /* Then when you want to show toast, call method and pass argument as text to display*/
          toast.success("Toast it up");
        }}
      >
        Show me toast
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```
