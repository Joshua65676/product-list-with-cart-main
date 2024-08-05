
const SelectedOrder = () => {
  return (
    <div className="h-64 -mt-8 -ml-5 bg-white w-80 rounded-2xl">
      <div className="pt-5">
        <h3 className="ml-5 text-base font-bold text-Reds">
          Your Cart <span className="">(0)</span>
        </h3>
      </div>
      
      <div className="">
        <div className="">
            
        </div>
        
        <div className="flex items-center h-10 m-3 mb-5 rounded-lg bg-Rose-100 w-72">
            <img
             src="/src/assets/images/icon-carbon-neutral.svg"
             alt=""
             className="w-5 ml-7"
            />
            <p className="ml-2 text-sm text-Rose-500">
                This is a <span className="font-semibold text-Rose-900">carbon-neutral</span> delivery
            </p>
        </div>
        
        <button className="h-10 ml-3 rounded-full bg-Reds w-72">
            <p className="font-semibold text-white">Confirm Order</p>
        </button>
      </div>
    </div>
  )
}

export default SelectedOrder
