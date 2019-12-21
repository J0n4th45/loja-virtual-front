import React from "react";
import { Alert, Card, Form, Button, Row, Col } from "react-bootstrap";

import API from "../../resource/api";
import { ProductTable } from "../../components";

class ProductEdict extends React.Component {
  state = {
    id: null,
    name: "",
    brand: "",
    price: "",
    imageURL: "",
    show: false,
    showMessage: "",
    products: []
  };

  onSubmit = async () => {
    if (
      this.state.name &&
      this.state.brand &&
      this.state.price &&
      this.state.imageURL
    ) {
      const priceFloat = parseFloat(this.state.price);
      if (isNaN(priceFloat)) {
        this.setShow(true, "Preço Inválido!");
        return;
      }
      const payload = {
        name: this.state.name,
        brand: this.state.brand,
        price: this.state.price,
        imageURL: this.state.imageURL
      };
      if (this.state.id) {
        payload.id = this.state.id;
        try {
          const products = (await API.put("/produto", payload)).data;
          if (products) {
            this.setState({ name: "", brand: "", price: "", imageURL: "" });
            this.setProducts();
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const products = (await API.post("/produto", payload)).data;
          if (products) {
            this.setState({ name: "", brand: "", price: "", imageURL: "" });
            this.setProducts();
          }
        } catch (error) {
          console.error(error);
        }
      }
      this.setState({
        id: null,
        name: "",
        brand: "",
        price: "",
        imageURL: ""
      });
    } else {
      this.setShow(true, "Todos os campos são obrigatórios!");
    }
  };

  updateName = event => {
    this.setState({
      name: event.target.value
    });
  };
  updateBrand = event => {
    this.setState({
      brand: event.target.value
    });
  };
  updatePrice = event => {
    this.setState({
      price: event.target.value
    });
  };
  updateImageURL = event => {
    this.setState({
      imageURL: event.target.value
    });
  };

  setShow = (status, message) =>
    this.setState({ show: status, showMessage: message });

  setProducts = async () => {
    this.setState({ products: (await API.get("/produtos")).data });
  };

  handleOnRemove = async p => {
    const result = (await API.delete(`/produto/${p.id}`)).data;
    this.setProducts();
  };

  handleOnUpdate = async p => {
    const { id, name, brand, price, imageURL } = { ...p };
    this.setState({ id, name, brand, price, imageURL });
  };

  componentDidMount = async () => {
    this.setProducts();
  };

  render() {
    const { name, brand, price, imageURL, show } = this.state;
    return (
      <div>
        <Card>
          <Card.Body>
            <Alert
              variant="danger"
              show={show}
              size="sm"
              onClose={() => this.setShow(false, null)}
              dismissible
            >
              <p className={"p-0 m-0"}>{this.state.showMessage}</p>
            </Alert>
            <Card.Title>Cadastro de Produtos</Card.Title>
            <Form>
              <Row>
                <Col md="6">
                  <Form.Group controlId="produtName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nome do Produto"
                      value={name}
                      onChange={this.updateName}
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="productBrand">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Marca do produto"
                      value={brand}
                      onChange={this.updateBrand}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md="6">
                  <Form.Group controlId="produtPrice">
                    <Form.Label>Preço</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex: 12.50"
                      value={price}
                      onChange={this.updatePrice}
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group controlId="producImage">
                    <Form.Label>URL da Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ex: http://minha-imagem.com.br"
                      value={imageURL}
                      onChange={this.updateImageURL}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                onClick={this.onSubmit}
                variant="primary"
                className={"float-right"}
              >
                Adicionar
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <ProductTable
          products={this.state.products}
          onRemove={this.handleOnRemove}
          onUpdate={this.handleOnUpdate}
        />
      </div>
    );
  }
}

export default ProductEdict;
