//libraries
import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//components
import RestaurantNavbar from '../Components/Navbar/RestaurantNavbar';
import ImageGrid from '../Components/Restaurant/ImageGrid';
import RestauarntInfo from '../Components/Restaurant/RestauarntInfo';
import InfoButtons from '../Components/Restaurant/InfoButtons';
import Tabs from '../Components/Restaurant/Tabs';
import { TiStarOutline } from 'react-icons/ti';
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri';
import {BiBookmarkPlus} from 'react-icons/bi';
import CartContainer from '../Components/Cart/CartContainer'

//redux actions
import {getSpecificRestaurant} from '../Redux/Reducer/restaurant/restaurant.action';
import { getImage } from "../Redux/Reducer/Image/Image.action";
import {getCart} from '../Redux/Reducer/Cart/cart.action';

function RestaurantLayout({children}) {
  const { id } = useParams();
  const dispatch = useDispatch();
    const [restaurant, setRestaurant] = useState({
      images: [],
      name: "",
      cuisine: "",
      address: "",
      });

      useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
          setRestaurant((prev) => ({
            ...prev,
            ...data.payload.restaurants,
          }));
    
          dispatch(getImage(data.payload.restaurants.photos)).then((data) => {
            setRestaurant((prev) => ({
             ...prev,
               ...data.payload.image,
             }));
           });
        });

        dispatch(getCart());
      }, []);

    return (
      <>
        <RestaurantNavbar />
        <div className="container mx-auto px-4 py-4 lg:px-20 pb-10 mb-10">
          <ImageGrid images={restaurant?.images} />
          <RestauarntInfo
            name={restaurant?.name}
            restaurantRating={restaurant?.restaurantRating || 0}
            deliveryRating={restaurant?.deliveryRating || 0}
            cuisine={restaurant?.cuisine}
            address={restaurant?.address}
          />
          <div className="my-4 flex flex-wrap gap-3">
            <InfoButtons isActive>
              <TiStarOutline /> Add Review
            </InfoButtons>
            <InfoButtons>
              <RiDirectionLine /> Direction
            </InfoButtons>
            <InfoButtons>
              <BiBookmarkPlus /> Bookmark
            </InfoButtons>
            <InfoButtons>
              <RiShareForwardLine /> Share
            </InfoButtons>
          </div>
          <div className="my-10">
            <Tabs />
          </div>
          {children}
        </div>
        <CartContainer />
      </>
    );
  }
  
  export default RestaurantLayout;