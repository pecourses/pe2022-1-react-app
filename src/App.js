import React, { useState } from 'react';

// HOC - компонент вищого порядку (функція, яка приймає і повертає компонент)
function App() {
  const InnerComponentWithNewProp = withNewProp(InnerComponent);

  return <InnerComponentWithNewProp ownProp="ownProp" />;
}

export default App;

function withNewProp(WrappedComponent) {
  function NewComponent(props) {
    const [newProp, setNewProp] = useState(10);

    return <WrappedComponent newProp={newProp} {...props} />;
  }

  return NewComponent;
}

function InnerComponent(props) {
  return (
    <div>
      {props.ownProp ?? 'Prop is missing'} {props.newProp}
    </div>
  );
}
