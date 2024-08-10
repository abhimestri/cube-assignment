import "./Main.css";
import { useEffect, useState } from "react";
import { getImages } from "../api/api";
import { CustomerCardDetailsProps } from "../components/CustomerCard";

export interface MainProps {
  selectedCustomer: CustomerCardDetailsProps;
}

const Main = ({ selectedCustomer }: MainProps) => {
  const [imagesList, setImagesList] = useState<any>([]);
  const [currIndex, setCurrIndex] = useState<number>(0);

  useEffect(() => {
    if (imagesList?.length === 0) {
      getImages()?.then((data: any) => {
        setImagesList([...data]);
      });
    }
  }, [imagesList]);

  useEffect(() => {
    const updateIndex = () => {
      if (currIndex + 9 >= 27) {
        setCurrIndex(0);
      } else {
        setCurrIndex(currIndex + 9);
      }
    };
    const id = setInterval(updateIndex, 10000);

    return () => clearInterval(id);
  }, [currIndex, imagesList]);

  return (
    <div className="mainContainer">
      <div>
        <div className="customerDetails">
          <h3>{selectedCustomer?.name}</h3>
          <p>
            Title: {selectedCustomer?.title}, address:{" "}
            {selectedCustomer?.address}
          </p>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="imagesSecion">
          {imagesList?.slice(currIndex, currIndex + 9).map((img: any) => {
            return <img className="image" src={img?.urls?.regular} alt={""} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
