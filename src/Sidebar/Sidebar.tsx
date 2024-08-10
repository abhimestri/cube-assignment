import "./Sidebar.css";
import UserCard, { CustomerCardDetailsProps } from "../components/CustomerCard";

export interface SidebarProps {
  customerDataList: CustomerCardDetailsProps[];
  handleSelectCustomer: (data: CustomerCardDetailsProps) => void;
  selectedCustomer: CustomerCardDetailsProps;
}

const Sidebar = ({
  customerDataList,
  handleSelectCustomer,
  selectedCustomer,
}: SidebarProps) => {
  return (
    <div className="sidebarContainer">
      {customerDataList?.map((item: CustomerCardDetailsProps) => {
        return (
          <UserCard
            isSelected={item.id === selectedCustomer?.id}
            customerDetails={item}
            handleSelectCustomer={handleSelectCustomer}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
