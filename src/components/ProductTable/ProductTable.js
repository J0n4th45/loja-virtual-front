import React from "react";
import { Table, Button } from "react-bootstrap";

class ProductTable extends React.Component {
  render() {
    const { products, onRemove, onUpdate } = this.props;
    return (
      <Table responsive className={"mt-3"}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Marca</th>
            <th>Preço</th>
            <th>Imagem</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.brand}</td>
              <td>{p.price}</td>
              <td>{p.imageURL}</td>
              <td>
                <div style={{ width: "150px" }}>
                  <Button
                    variant="warning"
                    className={"float-left"}
                    onClick={() => onUpdate(p)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    className={"float-right"}
                    onClick={() => onRemove(p)}
                  >
                    Excluir
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
export default ProductTable;
