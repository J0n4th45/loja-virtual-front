import React from "react";
import { Card, Row } from "react-bootstrap";

import API from "../../resource/api";

class ProductList extends React.Component {
  state = {
    products: []
  };

  componentDidMount = async () => {
    const produtos = (await API.get("/produtos")).data;
    this.setState({ products: produtos });
  };

  render() {
    const { products } = this.state;
    return (
      <Row className={"justify-content-center"}>
        {products.map((p, index) => (
          <Card
            key={index}
            border="secondary"
            style={{ width: "18rem" }}
            className={"mx-2 my-2 card-shadow"}
          >
            <Card.Header>{p.name}</Card.Header>
            <Card.Img variant="top" src={p.imageURL} height="256px" />
            <Card.Body>
              <Card.Title>{p.brand}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Perço: {p.price}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </Row>
    );
  }
}

export default ProductList;
