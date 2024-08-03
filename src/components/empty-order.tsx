import { itemsData } from "../constants/index.js";

const EmptyOrder = () => {
  return (
    <>
      <div className="">
        <h1 className="">Desserts</h1>
      </div>
      <div className="">
        {itemsData.map(({ id, image, icon, add, name, description, price}:
         {id: number; image: string; icon: string; add: string; name: string; description: string; price: string }) => (
            <div key={id} className="">

              <div className="">
                <img src={image} alt="image" className="" />
              </div>

              <div className="">
                <div className="">
                  <img src={icon} alt="image" className="" />
                </div>
                <div className="">{add}</div>
              </div>

              <div className="">
                <div className="">{name}</div>
                <div className="">{description}</div>
                <div className="">{price}</div>
              </div>
            </div>
        ))}
      </div>
    </>
  )
}

export default EmptyOrder
