import { useState } from "react";
import './Counter.scss';

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <span className="count">{count}</span>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}