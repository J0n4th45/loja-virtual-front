import React from "react";
import { Container } from "react-bootstrap";

import Header from "../Header/Header";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Header
        brand={"Loja Virtual"}
        links={[
          { name: "Lista de Produtos", href: "/lista-protudo" },
          { name: "Cadastro de Produtos", href: "/edita-protudo" }
        ]}
      />
      <Container className={"p-4 mt-5"}>{children}</Container>
    </div>
  );
};

export default PageLayout;
