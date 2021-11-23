import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardItemComponent from "./cardItemComponent/cardItemComponent";
import SortComponent from './sort-component/sort-component';
import { LOCALSTORE_TOTALITEMS } from "../models/constants";
import {Button} from "react-bootstrap";

function Items() {
  const itemsList = [
    {id: 1, name: "Мийка вікон", imgurl: '/imgs/fruits/Clean14.jpg', price: 200},
    {id: 2, name: "Чистка коврів", imgurl: "/imgs/fruits/Clean13.jpg", price: 350},
    {id: 3, name: "Вологе прибирання", imgurl: "/imgs/fruits/Clean12.jpg", price: 300},
    {id: 4, name: "Сухе прибирання", imgurl: "/imgs/fruits/Clean11.jpg", price: 250},
    {id: 5, name: "Мийка підлоги", imgurl: "/imgs/fruits/Clean10.jpg", price: 200},
    {id: 6, name: "Миття стін", imgurl: "/imgs/fruits/Clean9.jpg", price: 400},
    {id: 7, name: "Мийка машини", imgurl: '/imgs/fruits/Clean8.jpg', price: 200},
    {id: 8, name: "Чистка салону авто", imgurl: "/imgs/fruits/Clean7.jpg", price: 350},
    {id: 9, name: "Протирання порохів", imgurl: "/imgs/fruits/Clean6.jpg", price: 300},
    {id: 10, name: "Прибирання іграшок", imgurl: "/imgs/fruits/Clean5.jpg", price: 250},
    {id: 11, name: "Мийка дитячих іграшок", imgurl: "/imgs/fruits/Clean4.jpg", price: 200},
    {id: 12, name: "Миття доріжок", imgurl: "/imgs/fruits/Clean3.jpg", price: 400},
    {id: 13, name: "Мийка котів", imgurl: '/imgs/fruits/Clean2.jpg', price: 200},
    {id: 14, name: "Чистка собак", imgurl: "/imgs/fruits/Clean1.jpg", price: 350},
    {id: 15, name: "Мийка вікон+", imgurl: '/imgs/fruits/Clean14.jpg', price: 300},
    {id: 16, name: "Чистка коврів+", imgurl: "/imgs/fruits/Clean13.jpg", price: 450},
    {id: 17, name: "Вологе прибирання+", imgurl: "/imgs/fruits/Clean12.jpg", price: 600},
    {id: 18, name: "Сухе прибирання+", imgurl: "/imgs/fruits/Clean11.jpg", price: 350},
    {id: 19, name: "Мийка підлоги+", imgurl: "/imgs/fruits/Clean10.jpg", price: 300},
    {id: 20, name: "Миття стін+", imgurl: "/imgs/fruits/Clean9.jpg", price: 500},
    {id: 21, name: "Мийка машини+", imgurl: '/imgs/fruits/Clean8.jpg', price: 200},
    {id: 22, name: "Чистка салону авто+", imgurl: "/imgs/fruits/Clean7.jpg", price: 450},
    {id: 23, name: "Протирання порохів+", imgurl: "/imgs/fruits/Clean6.jpg", price: 400},
    {id: 34, name: "Прибирання іграшок+", imgurl: "/imgs/fruits/Clean5.jpg", price: 350},
    {id: 25, name: "Мийка дитячих іграшок+", imgurl: "/imgs/fruits/Clean4.jpg", price: 300},
    {id: 26, name: "Миття доріжок+", imgurl: "/imgs/fruits/Clean3.jpg", price: 500},
    {id: 27, name: "Мийка котів+", imgurl: '/imgs/fruits/Clean2.jpg', price: 300},
    {id: 28, name: "Чистка собак+", imgurl: "/imgs/fruits/Clean1.jpg", price: 450},
  ];
  const [itemsToSell, setItemsToSell] = useState(itemsList);
  const [totalItems, setTotalItems] = useState([]);




  const getLocalStore = () => {
    if (totalItems && totalItems.length > 0) {
        return;
    }

    let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
    cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : cardsLocal;
    if(cardsLocal && Array.isArray(cardsLocal) && cardsLocal.length > 0) {
        setTotalItems([...cardsLocal]);
    }
};

useEffect(() => {
  getLocalStore();
});



  const addItem = (cardItem) => {
      window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));
      setTotalItems([...totalItems, cardItem]);
      
  }

  const removeItem = (cardItem) => {
      let foundItemIndex;
      totalItems.forEach((item, index) => {
          if (item.id === cardItem.id) {
              foundItemIndex = index;
          }
      });
      totalItems.splice(foundItemIndex, 1);
      setTotalItems([...totalItems]);
      window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(totalItems));
  }


const setSortTotalItems = (cards) => {
  setItemsToSell(cards);
}



  return (
<>
 <section className="mt-3 container">
<div className="row">
    <div className="col-12">
        <h3 className="text-end">Всього {totalItems.length} годин роботи  ціною {totalItems
            .reduce((accumulator, item) => {
                return accumulator += item.price;
            }, 0)} грн.</h3>
    </div>
</div>

<SortComponent itemsList={itemsList} totalItems={totalItems} setSortTotalItems={setSortTotalItems}/>





<div className="row">
  {itemsList.map(item => {
    return (
        <CardItemComponent key={item.id} card={item} addItem={addItem} removeItem={removeItem}
                           totalItems={totalItems.filter(itemFilter => itemFilter.id === item.id)} />
    );
  })}
</div>
</section>
  </>
 );
}
export default Items;
