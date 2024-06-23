import Table from "react-bootstrap/Table";
import { useState } from "react";

const ProductosTable = ({ data, handleSelectProduct }) => {
  
  const [selectedProducts, setSelectedProducts] = useState([]);
  const columns = ["ID", "Producto", "Proveedor", "Precio", "Stock"];

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
    <Table
      striped
      bordered
      hover
      size="sm"
      style={{
        borderColor: "#550ed4",
        borderStyle: "solid",
      }}
    >
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
            <td>{row.id}</td>
            <td>{row.nombre}</td>
            <td>{row.proveedor}</td>
            <td>{row.precio}</td>
            <td>{row.stock}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductosTable;
