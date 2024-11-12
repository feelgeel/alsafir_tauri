import { faBarcode, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Cards from '../card/Cards';
import { useDispatch, useSelector } from 'react-redux';


let classSelected1 = "item item-active";
let classUnselected1 = "item ";
let classSelected2 = "item-icon icon-active";
let classUnselected2 = "item-icon ";
let classSelected3 = "name-item name-active";
let classUnselected3 = "name-item ";

export default function ProdComponent({setprodType2,prodType2,setaddtoDbModal,setupdateDbModal}) {
    const patisserieRedux = useSelector((state) => state.entities.patisserie.list );
    const breadRedux = useSelector((state) => state.entities.bread.bread );
    const dispatch=useDispatch()
    const handleAdd = () => {
        setaddtoDbModal(true);
      };
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
        dispatch(chosenProdAction.setChosenProd(data));
        setupdateDbModal(true);
      };
  return (
    <div>
            <p
              style={{ width: "1rem", margin: ".5rem" }}
              onClick={handleAdd}
              className="item-plus item-plus-left"
            >
              <FontAwesomeIcon className="item-icon" icon={faPlus} />
            </p>
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
                <Cards data={patisserieRedux} onclick={updateProduct} />
              )}
            </div>
            <div className="d-flex">
              {prodType2 === "bread" && (
                <Cards data={breadRedux} onclick={updateProduct} />
              )}
            </div>
          </div>
  )
}
