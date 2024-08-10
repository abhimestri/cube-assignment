import "./CustomerCard.css";

export interface CustomerCardDetailsProps {
  name: string;
  title: string;
  id: string;
  address: string;
}

interface CustomerCardProps {
  isSelected: boolean;
  customerDetails: CustomerCardDetailsProps;
  handleSelectCustomer: (data: CustomerCardDetailsProps) => void;
}

const CustomerCard = ({
  isSelected,
  customerDetails,
  handleSelectCustomer,
}: CustomerCardProps) => {
  return (
    <div
      className={
        isSelected ? "basicCard activeCustomerCard" : `basicCard customerCard`
      }
      onClick={() => handleSelectCustomer(customerDetails)}
    >
      <h3 className="customerName">{customerDetails?.name}</h3>
      <p className="customerCardDetails">
        <span>Title: {customerDetails?.title}</span>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};

export default CustomerCard;
