# react-toastbox

A minimal react toast box inspired by reddit's toast message design and react-toastify.

## Installation

[![NPM version](https://img.shields.io/badge/npm-1.0.4-brightgreen.svg)](https://www.npmjs.com/package/react-toastbox)

Using npm:

```
npm install react-toastbox
```

## Codesandbox demo

[Live Demo](https://codesandbox.io/s/epic-currying-62r0y)

## Screenshots

![Toaster](https://i.imgur.com/5CDEUf9.png)

## API

### props

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 60px;">name</th>
    <th style="width: 50px;">type</th>
    <th style="width: 10px;">default</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>textContent</td>
      <td>String</td>
      <td>'Your message here'</td>
      <td>To display text content</td>
    </tr>
    <tr>
      <td>timerExpires</td>
      <td>Number</td>
      <td>6000(in 'ms')</td>
      <td>Expiration time till toast message should be visible</td>
    </tr>
    <tr>
      <td>pauseOnHover</td>
      <td>Boolean</td>
      <td>true</td>
      <td>On hovering toast, it's timer should be paused</td>
    </tr>
    <tr>
      <td>position</td>
      <td>String</td>
      <td>'top_right'</td>
      <td>Position for toast to be displayed.</td>
    </tr>
    <tr>
      <td>intent</td>
      <td>String</td>
      <td>'primary'</td>
      <td> Theme for toast message </td>
    </tr>
  </tbody>
</table>

## Possible values for API

```js
 positionClasses: [
        'top_right',
        'top_left',
        'top_center',
        'bottom_right',
        'bottom_left',
        'bottom_center'
 ]
paints: [
        'success',
        'warning',
        'danger'
],
```

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import ToastBox, { toast } from "react-toastbox";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ToastBox
        textContent="Toast it up"
        timerExpires={5000}
        position="top-right"
        pauseOnHover={true}
        intent="success"
      />
      <button
        onClick={() => {
          toast.success();
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
