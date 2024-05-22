import { useEffect, useState } from 'react';

const AnimatedNumber = ({ value }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Calculate the minimum value based on the number of digits of the input value
    const minValue = Math.pow(10, value.toString().length - 1);

    const animate = setInterval(() => {
      // Adjusted to use minValue and value to determine the range of random numbers
      setCount(Math.floor(Math.random() * (value - minValue)) + minValue);
    }, 40);
    
    setTimeout(() => {
      clearInterval(animate);
      setCount(value);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts or value changes
    return () => clearInterval(animate);
  }, [value]); // Added value as a dependency to re-run the effect if value changes
  
  return <div>{count}</div>;
};

export default AnimatedNumber;
