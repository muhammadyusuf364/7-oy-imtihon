
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import Filter from "../Components/Filter";

import Navbar from "../Components/Navbar";

function Products() {
  const info = useSelector((state) => state.products);
 const navigate = useNavigate()
  return (
    <>
      <Navbar></Navbar>
      <div className="w-[80%] cursor-pointer container mx-auto py-5">
        <Filter></Filter>
        <p>{info.data.length} product</p>
        <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5 p-">
          {info?.data.map((data) => {
            return (
              <div
                key={data.id}
                onClick={()=>navigate("/single", {state:{data:data}})}
                className="text-center mx-auto w-full shadow-[#cfc5c5f8] shadow-lg p-5 rounded-lg "
              >
                <img
                  src={data.attributes.image}
                  className="rounded-lg h-[200px] md:h-[300px] w-full"
                  alt=""
                />
                <p>
                  {data.attributes.title[0].toUpperCase() +
                    data.attributes.title.slice(1)}
                </p>
                <span>${data.attributes.price}</span>
              </div>
            );
          })}
          {!info?.data.length && (
            <p className="text-2xl">
              Sorry, no products matched your search...
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
