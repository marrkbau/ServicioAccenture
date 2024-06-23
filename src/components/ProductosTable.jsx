import Table from "react-bootstrap/Table";
import { useState } from "react";

const ProductosTable = ({ columns, data, dataFields, handleSelectProduct }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelect = (product) => {
    if (selectedProducts.includes(product.id)) {
      const filteredProducts = selectedProducts.filter(
        (id) => id !== product.id
      );
      setSelectedProducts(filteredProducts);
    } else {
      setSelectedProducts([...selectedProducts, product.id]);
    }
    handleSelectProduct(product);
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          {columns.map((column) => (
            <th>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            className={selectedProducts.includes(row.id) ? "selected" : ""}
            onClick={() => handleSelect(row)}
          >
            {dataFields.map((field) => (
              <td>{row[field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductosTable;
