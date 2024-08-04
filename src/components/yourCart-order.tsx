
const YourCart = () => {
  return (
    <div className="h-64 -mt-3 -ml-5 bg-white w-80 rounded-2xl">
      <div className="pt-5">
        <h3 className="ml-5 ">
          Your Cart (0)
        </h3>
      </div>
      <div className="mt-5 text-center">
        <img src="/src/assets/images/illustration-empty-cart.svg" alt="image" className="w-32 ml-24" />
        <p className="">
          Your added items will appear here
        </p>
      </div>
    </div>
  )
}

export default YourCart
