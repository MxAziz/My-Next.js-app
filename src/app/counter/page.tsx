"use client";

import { useState } from "react";

const Page = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log("Incremented:", count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
        console.log("Decremented:", count - 1);
    };
    const reset = () => {
        setCount(0);
        console.log("Reset:", 0);
    };
    return (
        <div>
                            <h1>This is Counter Component</h1>
                <p>Counter value: {count}</p>
                <button className="px-4 py-2 bg-white text-black rounded-full cursor-pointer" onClick={increment}>Increment</button>
                <button className="px-4 py-2 bg-white text-black rounded-full cursor-pointer" onClick={decrement}>Decrement</button>
                <button className="px-4 py-2 bg-white text-black rounded-full cursor-pointer" onClick={reset}>Reset</button>
        </div>
    );
};

export default Page;