import React from "react";
import { Card, Row } from "react-bootstrap";

class ProductList extends React.Component {
  state = {
    produtos: [
      {
        name: "Produto 1",
        description: "Descrição do Produto.",
        brand: "Marca",
        price: "$100,00",
        image:
          "https://static.zattini.com.br/produtos/bolsa-feminina-transversal-maria-milao-matelasse/06/HDL-0046-006/HDL-0046-006_zoom1.jpg"
      },
      {
        name: "Produto 1",
        description: "Descrição do Produto.",
        brand: "Marca",
        price: "$100,00",
        image:
          "https://static.zattini.com.br/produtos/bolsa-feminina-transversal-maria-milao-matelasse/06/HDL-0046-006/HDL-0046-006_zoom1.jpg"
      },
      {
        name: "Produto 1",
        description: "Descrição do Produto.",
        brand: "Marca",
        price: "$100,00",
        image:
          "https://static.zattini.com.br/produtos/bolsa-feminina-transversal-maria-milao-matelasse/06/HDL-0046-006/HDL-0046-006_zoom1.jpg"
      },
      {
        name: "Produto 1",
        description: "Descrição do Produto.",
        brand: "Marca",
        price: "$100,00",
        image:
          "https://static.zattini.com.br/produtos/bolsa-feminina-transversal-maria-milao-matelasse/06/HDL-0046-006/HDL-0046-006_zoom1.jpg"
      }
    ]
  };

  render() {
    const { produtos } = this.state;
    return (
      <Row className={"justify-content-center"}>
        {produtos.map((p, index) => (
          <Card
            key={index}
            border="secondary"
            style={{ width: "18rem" }}
            className={"mx-2 my-2 card-shadow"}
          >
            <Card.Header>{p.name}</Card.Header>
            <Card.Img variant="top" src={p.image} />
            <Card.Body>
              <Card.Title>{p.brand}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Perço: {p.price}
              </Card.Subtitle>
              <Card.Text>{p.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
}

export default ProductList;
