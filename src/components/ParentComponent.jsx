import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child Component Rendered');
  return <button onClick={onClick}>Click Me</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button Clicked!');
    setCount(count + 1);
    console.log(count);
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

export default ParentComponent;
