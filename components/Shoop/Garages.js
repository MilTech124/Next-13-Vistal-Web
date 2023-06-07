import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Garage from "../ui/Garage";
import { useDispatch } from "react-redux";
import { change } from "../../store/reducers/products.reducer";
import { useSelector } from "react-redux";
// TRANSLATION
import { useTranslation } from "next-i18next";

function Filters({ garages }) {
  const { t } = useTranslation("sklep");
  const dispatch = useDispatch();
  const currentProduct = useSelector(
    (state) => state.productsReducer.currentproduct
  );
  const Products = useSelector((state) => state.productsReducer.Products);

  const changeProduct = (name) => {
    dispatch(change(name));
    setFilter(name);
  };

  const [filter, setFilter] = useState(currentProduct);
  return (
    <>
      {/* FILTERS */}

      <div>
        {" "}
        {Products.map((name) => (
          <button
          key={name}
            type="button"
            style={filter === name ? { backgroundColor: "grey" } : null}
            onClick={() => changeProduct(name)}
            className="bg-red-700 mr-2 mt-2 text-md text-white font-semibold py-2 px-5 max-sm:px-2 rounded-lg hover:bg-yellow-400 transition-all"
          >
            {name}
          </button>
        ))}
      </div>

      {/* FILTERS */}

      <h2 className="text-2xl pt-2 font-semibold">{currentProduct}</h2>

      <div className="py-10 flex items-center flex-col gap-5">
        {garages.map((garage) => (
          <Fade key={garage.id}>
            {garage.acf.rodzaj === currentProduct ? (
              <Garage garage={garage} />
           
            ) : null}
          </Fade>
        ))}
      </div>
    </>
  );
}

export default Filters;
