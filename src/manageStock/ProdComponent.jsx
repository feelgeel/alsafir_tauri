import { faBarcode, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Cards from '../card/Cards';
import { useDispatch, useSelector } from 'react-redux';
import *as chosenAction from "../redux/reduxSlice/chosen";

let classSelected1 = "item item-active";
let classUnselected1 = "item ";
let classSelected2 = "item-icon icon-active";
let classUnselected2 = "item-icon ";
let classSelected3 = "name-item name-active";
let classUnselected3 = "name-item ";



export default function ProdComponent({setprodType2,prodType2,setaddtoDbModal,
   setupdateDbModal,patisserie,bread}) {
    // console.log(patisserie);
    const StpatisserieRedux = useSelector((state) => state.entities.patisserie.patisserieSt );
    const StbreadRedux = useSelector((state) => state.entities.bread.breadSt);
    const ingRedux = useSelector((state) => state.entities.ingredient.ing);
    const producedPriceRedux = useSelector((state) => state.entities.ingredient.producedQuant);
    const chosenIngredux = useSelector((state) => state.entities.chosen.chosenIng);

    const dispatch=useDispatch()
      const handleSelected2 = (dt) => {
        // console.log(dt);
        switch (dt) {
          case "bread":
            setprodType2("bread");
            break;
          case "patisserie":
            setprodType2("patisserie");
            break;
    
          default:
            break;
        }
      };
      const updateProduct = (data) => {
        // console.log(data);
        let selectedIng=ingRedux.filter((ing) => ing.prodId === data._id);
        let producedPrice=producedPriceRedux.filter((ing) => ing.prodId === data._id);
        selectedIng=selectedIng.length===0?selectedIng={}:selectedIng[0]
        producedPrice=producedPrice.length===0?producedPrice={}:producedPrice[0]
        console.log("selectedIng",producedPrice);
        dispatch(chosenAction.modifychosenprod(data));
        dispatch(chosenAction.modifychosenIng(selectedIng));
        dispatch(chosenAction.modifychosenprice(producedPrice));
        setupdateDbModal(true);
      };
  return (
    <>
    {true&&<div>
          
            <div className="d-flex" style={{ justifyContent: "flex-start" }}>
              <div
                onClick={() => { handleSelected2("bread");}}
                className={prodType2 === "bread" ? classSelected1 : classUnselected1}
              >
                <FontAwesomeIcon
                  className={prodType2 === "bread" ? classSelected2 : classUnselected2 }
                  icon={faBarcode}
                />
                <p className={prodType2 === "bread" ? classSelected3 : classUnselected3}
                >
                  bread{" "}
                </p>
              </div>
              <div
                onClick={() => {handleSelected2("patisserie");}}
                className={prodType2 === "patisserie" ? classSelected1 : classUnselected1}
              >
                <FontAwesomeIcon
                  className={prodType2 === "patisserie" ? classSelected2: classUnselected2}
                  icon={faBarcode}
                />
                <p className={prodType2 === "patisserie"? classSelected3: classUnselected3}>
                  patisserie
                </p>
              </div>
            </div>

            <div className="d-flex">
              {prodType2 === "patisserie" && (
                <Cards data={patisserie} onclick={updateProduct} />
              )}
            </div>
            <div className="d-flex">
              {prodType2 === "bread" && (
                <Cards data={bread} onclick={updateProduct} />
              )}
            </div>
    </div>}
    </>
  )
}
