import './filter.css';
import { Button, Form } from 'react-bootstrap';
//import { useCart } from './CartProvider';

const Filters = () => {
  // const { productDispatch, productState: { sort, bySellingFast, bySale, byStock } } = useCart();

  // const handleSortAsc = (ascending) => {
  //   productDispatch({ type: "SORT", ascending });
  //   }

  //   const handleSortDes = (descending) => {
  //     productDispatch({ type: "SORT", descending });
  //   }

  // const handleSellingFast = () => {
  //     productDispatch({ type: "SELLING_FAST" });
  // }

  // const handleSale = () => {
  //   productDispatch({ type: "SALE" })
  // }

  // const handleClear = () => {
  //   productDispatch({ type: "CLEAR" })
  // }
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Price Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
          // onChange={() => handleSortAsc()}
          // checked={sort === "ascending" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Price Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          // onChange={() => handleSortDes()}
          // checked={sort === "descending" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Selling Fast"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          // onChange={() => handleSellingFast()}
          // checked={bySellingFast}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="On Sale"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          // onChange={() => handleSale()}
          // checked={bySale}
        />
      </span>
      <Button variant="light" 
      // onChange={() => handleClear()}
      >
        Clear Filters
      </Button>
    </div>
  );
}
export default Filters;