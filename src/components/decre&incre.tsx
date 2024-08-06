import { useState } from "react";

const DecreIncrement = () => {
    const [count, setCount] = useState(1);
    // const [sub, setSub] = useState(1);

    function increment() {
      setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    
  return (
    <div className="flex">
      <div className="flex items-center w-40 h-12 mb-5 ml-16 -mt-6 border-2 rounded-full bg-Reds">
          <div className="flex ml-2 space-x-10">
            <button className="w-5 h-5 ml-1 border-2 rounded-full border-red-50" onClick={decrement}>
              <img src="/src/assets/images/icon-decrement-quantity.svg" alt="image" className="ml-[3.5px]" />
            </button>
            <div className="-mt-0.5 font-semibold text-white">{ count }</div>
            <button className="w-5 h-5 ml-1 border-2 rounded-full border-red-50" onClick={increment}>
              <img src="/src/assets/images/icon-increment-quantity.svg" alt="image" className="ml-[3.5px]" />
            </button>
          </div>
      </div>
    </div>
  )
}

export default DecreIncrement
