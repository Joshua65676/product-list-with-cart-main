import { useState } from "react";
import { itemsData } from "../constants/index.js";
import DecreIncrement from "./decre&incre.js";
import SelectedOrder from "./selected-order.js";
import YourCart from "./yourCart-order.js";

const EmptyOrder = () => {
    const [showAdd, setShowAdd] = useState(true);
    const [isSelected, setIsSelected] = useState(false);

    // function () {
    //     // setSelectedItemId(itemsData);
    //     setShowAdd(false);
    // }
    
  return (
    <>

      <div className="flex space-x-20">
      
      <div className="grid grid-cols-3 gap-10">
        {itemsData.map(({ id, image, icon, add, name, description, price}:
         {id: number; image: string; icon: string; add: string; name: string; description: string; price: string }) => (
            <div key={id} className="">

              <div className="">
                <img src={image} alt="image" className="rounded-xl w-72" />
              </div>

              <>
                    
               <button onClick={() => setIsSelected(!isSelected, setShowAdd(false))} className="flex">
                <div className={`Add ${showAdd ? '' : 'hidden'}`}>
                    
                 <div className="flex items-center w-40 h-12 mb-5 ml-16 -mt-6 bg-white border-2 rounded-full border-Rose-300">
                  <div className="flex ml-5 space-x-3">
                    <img src={icon} alt="image" className="" />
                    <div className="font-semibold text-Rose-900">{add}</div>
                  </div>
                 </div>
                </div>
               </button>

               <div className={`Increment ${showAdd ? 'hidden' : 'flex'}`}>
                <DecreIncrement />
               </div>
               </>
              
              <div className="font-bold ">
                <div className="text-sm text-Rose-500">{name}</div>
                <div className="text-Rose-900">{description}</div>
                <div className="text-Reds">{price}</div>
              </div>
            </div>
        ))}
      </div>
      <div className="-mt-10 space-y-9">
        <div className={`Add ${showAdd ? '' : 'hidden'}`}>
          <YourCart />
        </div>
        <div className={`Increment ${showAdd ? 'hidden' : 'flex'}`}>
           <SelectedOrder />
        </div>
      </div>
      
      </div>
    </>
  )
}

export default EmptyOrder
