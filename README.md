# WidgetJS

![License](https://img.shields.io/github/license/kayyraa/WidgetJS)

WidgetJS is a powerful and flexible JavaScript library designed to simplify the creation and management of UI components. With WidgetJS, you can build dynamic, responsive, and reusable widgets with ease.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Examples](#examples)
- [API Documentation](#api-documentation)

## Features
- **Built-In Animations**: Smooth and customizable animations.
- **Built-In Widget Controls**: Ready-to-use controls for widgets.
- **Flexible Classes and Ids**: Easily manage widget styles and behaviors.

## Usage
```js
  import Widget from "Widget.js";

  const WidgetInstance = new Widget(
    "Example",      // Id
    500,            // X Size
    250,            // Y Size
    "Example Title" // Title
  );
  Widget.Show();
```

## Examples
```js
  import Widget from "Widget.js";

  const WidgetInstance = new Widget(
    "Example",      // Id
    500,            // X Size
    250,            // Y Size
    "Example Title" // Title
  );

  const WidgetObject = WidgetInstance.Show();

  const ExampleAddition = document.createElement("span");
  ExampleAddition.innerHTML = "Test";
  WidgetObject.appendChild(ExampleAddition);
```

## API Documentation
### Importing

```js
import Widget from "Widget.js";
```
### Visualization
```js
const WidgetInstance = new Widget(
  "Widget",
  500,
  250,
  "Widget Title"
);
WidgetInstance.Show();
```
