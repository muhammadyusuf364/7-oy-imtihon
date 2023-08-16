import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { decProduct, incProduct, removeProduct } from "../Redux/appSlice";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function Cart() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.products.savat);

  const notify = () =>
    toast.error("Item removed from card", {
      position: toast.POSITION.TOP_CENTER,
    });

  function removeF(id, color) {
    dispatch(removeProduct({ id, color }));
    notify();
  }

  function increase(id, color) {
    dispatch(incProduct({ id, color }));
  }
  function decrease(id, color) {
    dispatch(decProduct({ id, color }));
  }

  return (
    <>
      <Navbar state={state.length} />
      <ToastContainer />
      <div
        className={`w-[90%] mx-auto  container py-10 ${
          state.length < 3 && "lg:h-[100vh]"
        }`}
      >
        <h1 className="text-2xl font-bold text-[#394E6A] dark:text-white">
          {state.length ? "Shopping Cart" : "Your Cart Is Empty"}
        </h1>
        <hr className="my-5" />
        <div className="grid  max-lg:grid-cols-1 gap-10">
          {state?.map((cart, i) => (
            <div
              key={i}
              className="sm:flex gap-3 md:gap-10 "
            >
              <img
                className="w-[200px] h-[200px] sm:h-[200px] sm:w-[200px] rounded-lg"

                src={cart?.img}
                alt=""
              />
              <div>
                <h1 className="text-2xl font-bold text-black dark:text-white">{cart.title}</h1>
                <p className="text-xl font-bold  text-black dark:text-white my-5">{cart.company}</p>
                <p className=" text-black dark:text-white">Price:${cart.price / 100}</p>
                <p className="flex items-center  text-black dark:text-white my-5 gap-4">
                  Color:
                  <button
                    className="w-5 h-5 rounded-full"
                    style={{ background: cart.color }}
                  />
                </p>
                <p className=" text-black dark:text-white">Amount</p>
                <div className="flex justify-center bg-blue-700 dark:bg-[#FF57B6] text-2xl text-white rounded-lg p-1 gap-3 md:gap-10 mb-10">
                  <button
                    onClick={() => decrease(cart.id, cart.color)}
                    className="flex items-center"
                  >
                    <AiOutlineMinusCircle />
                  </button>
                  <span>{cart.count}</span>
                  <button
                    className="flex items-center"
                    onClick={() => increase(cart.id, cart.color)}
                  >
                    <AiOutlinePlusCircle />
                  </button>
                </div>
                <p
                  onClick={() => removeF(cart.id, cart.color)}
                  className="hover:underline cursor-pointer text-blue-700 dark:text-[#FF57B6]"
                >
                  Remove
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
