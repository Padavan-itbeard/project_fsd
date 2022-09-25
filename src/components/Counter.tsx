import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <span className={classes.count}>{count}</span>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}