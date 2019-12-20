import React from "react";
import { Alert, Card, Form, Button, Row, Col } from "react-bootstrap";

import API from "../../resource/api";

class ProductEdict extends React.Component {
  state = {
    name: "",
    brand: "",
    price: "",
    imageURL: "",
    show: false
  };

  onSubmit = async () => {
    if (
      this.state.name &&
      this.state.brand &&
      this.state.price &&
      this.state.imageURL
    ) {
      console.log("Enviando os Dados...");
      const products = (await API.get("/products")).data;
      console.log(products);
    } else {
      this.setShow(true);
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

  setShow = status => this.setState({ show: status });

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
              onClose={() => this.setShow(false)}
              dismissible
            >
              {/* <Alert.Heading>Todos os campos são obrigatórios!</Alert.Heading> */}
              <p className={"p-0 m-0"}>Todos os campos são obrigatórios.</p>
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
                      placeholder="Informe o valor do produto"
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
        <div>nome: {name}</div>
        <div>marca: {brand}</div>
        <div>preco: {price}</div>
        <div>image: {imageURL}</div>
      </div>
    );
  }
}

export default ProductEdict;
