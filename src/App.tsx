import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./Header/Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import { CustomerCardDetailsProps } from "./components/CustomerCard";
import { getCustomerList } from "./api/api";

const App = () => {
  const [customerDataList, setCustomerDataList] = useState<
    Array<CustomerCardDetailsProps>
  >([]);
  const [selectedCustomer, setSelectedCustomer] = useState<
    CustomerCardDetailsProps | any
  >();

  useEffect(() => {
    if (customerDataList?.length === 0) {
      getCustomerList()?.then((customerData) => {
        setCustomerDataList([...customerDataList, ...customerData]);
      });
    }

    if (!selectedCustomer) {
      setSelectedCustomer(customerDataList[0]);
    }
  }, [customerDataList, selectedCustomer]);

  const handleSelectCustomer = (customerDetails: CustomerCardDetailsProps) => {
    setSelectedCustomer(customerDetails);
  };

  return (
    <div className="App">
      <Heading />
      <div className="mainWrapper">
        <Sidebar
          customerDataList={customerDataList}
          handleSelectCustomer={handleSelectCustomer}
          selectedCustomer={selectedCustomer}
        />
        <Main selectedCustomer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
