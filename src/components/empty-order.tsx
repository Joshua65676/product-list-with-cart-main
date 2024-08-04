import { itemsData } from "../constants/index.js";
import YourCart from "./yourCart-order.js";

const EmptyOrder = () => {
  return (
    <>
      {/* <div className="">
        <h1 className="">Desserts</h1>
      </div> */}

      <div className="flex space-x-20">
      
      <div className="grid grid-cols-3 gap-10">
        {itemsData.map(({ id, image, icon, add, name, description, price}:
         {id: number; image: string; icon: string; add: string; name: string; description: string; price: string }) => (
            <div key={id} className="">

              <div className="">
                <img src={image} alt="image" className="rounded-xl w-72" />
              </div>

              <button className="flex">
                <div className="flex items-center w-40 mb-5 ml-16 -mt-5 bg-white border-4 rounded-full">
                  <div className="flex ml-5 space-x-3">
                    <img src={icon} alt="image" className="" />
                    <div className="">{add}</div>
                  </div>
                </div>
              </button>

              <div className="">
                <div className="">{name}</div>
                <div className="">{description}</div>
                <div className="">{price}</div>
              </div>
            </div>
        ))}
      </div>
      <div className="-mt-10">
        <YourCart />
      </div>
      
      </div>
    </>
  )
}

export default EmptyOrder
