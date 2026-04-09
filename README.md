# react-prep

This repository includes React topics, along with related blogs and reference links.

**JSX:**

- https://react.dev/learn/writing-markup-with-jsx

**React.createElement():**

- https://react.dev/reference/react/createElement

**Functional Component, Class Components:**

- https://react.dev/learn/your-first-component
- https://www.freecodecamp.org/news/function-component-vs-class-component-in-react/

**Props(Data Flow):**

- https://react.dev/learn/passing-props-to-a-component

**State:**

- https://react.dev/learn/state-a-components-memory
- https://react.dev/learn/choosing-the-state-structure
- https://react.dev/learn/sharing-state-between-components

**Events:**

- https://react.dev/learn/responding-to-events

**Rendering Lists:**

- https://react.dev/learn/rendering-

**hooks:**

- https://react.dev/reference/react/hooks

**Refs & Portals:**

- https://react.dev/learn/referencing-values-with-refs
- https://react.dev/reference/react/useRef

**Controlled & Uncontrolled components:**

**Higher Order Components:**

- https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e
- https://gist.github.com/bradwestfall/4fa683c8f4fcd781a38a8d623bec20e7

```js
export default function App() {
  return (
    <div>
      <BlueText />
    </div>
  );
}

function Text(props) {
  return <h1 style={props.style}>Hello World</h1>;
}

function withBlueStyle(WrappedComponent) {
  return (props) => {
    return <WrappedComponent {...props} style={{ color: 'red' }} />;
  };
}

const BlueText = withBlueStyle(Text);
```

---

## 🔗 References

- https://react.dev
- https://overreacted.io

---

## Additional Learning

**Design Systems:**

- https://uxdesign.cc/everything-you-need-to-know-about-design-systems-54b109851969

## 🧩 Components Implemented

- Accordion
