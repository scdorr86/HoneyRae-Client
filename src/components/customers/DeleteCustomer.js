import { Button } from "reactstrap";
import { deleteCustomer } from "../../data/customerData";


export function DeleteCustomer({ customerObj, setCustomers }) {

    const deleteThisCustomer = () => {

        if (window.confirm(`Delete ${customerObj.name}?`)) {
            deleteCustomer(customerObj.id).then((data) => setCustomers(data));
        }
    };

    return (
        <Button className="margin-left btn-sm" onClick={deleteThisCustomer}>Delete</Button>
    )
}