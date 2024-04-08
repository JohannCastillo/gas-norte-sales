import { Button } from "flowbite-react";
import { HiTrash } from "react-icons/hi";
import QuantityInput from "../shared/QuantityInput";
// TODO: Separate in components
export default function CartItem() {
  const CustomTrigger = () => {
    return (
      <span className="cursor-pointer">
        <HiTrash />
      </span>
    );
  };

  return (
    <div className="flex flex-wrap bg-white dark:bg-[#070707] w-full rounded-md p-4 relative">
      <div className="flex flex-wrap justify-between items-center w-full">
        {/* Details */}
        <div className="flex items-center gap-4">
          <img
            src="https://www.gascylinder.net/uploads/202115144/12-5kg-propane-gas-lpg-cylinder-iso470623585350824.jpg"
            alt="product"
            className="w-24 h-24 rounded-md shadow-2xl"
          />
          <div className="flex flex-col">
            <h3 className="text-lg whitespace-nowrap overflow-x-clip text-ellipsis max-w-[80%] md:max-w-[50%]">
              Gas doméstico
            </h3>
            <p className="text-sm">Gás doméstico premium</p>
            <p className="text-sm">Vendido por SolGas</p>
          </div>
        </div>
        {/* Price and Quantity */}
        <div className="flex justify-between items-center w-full">
          <span className="font-extrabold text-lg">S/. 1100.90</span>
          {/* <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <Button className="bg-black text-white p-0 w-7 h-7">-</Button>
              <input
                type="text"
                className="dark:bg-black w-[40px] h-7 text-center p-0 rounded-md"
                value={"12"}
                onChange={() => {}}
              />
              <Button className="bg-black text-white p-0 w-7 h-7">+</Button>
            </div>
            <span>Máx 40 unidades</span>
          </div> */}
          {/* <QuantityInput initial={1} max={10} /> */}
        </div>
      </div>

      {/* Delete */}
      <div className="absolute top-3 right-2">
       <CustomTrigger /> 
      </div>
    </div>
  );
}
