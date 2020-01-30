import React, { Component } from "react";
import { doctors, services } from "./data/data";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    doctors: [],
    services: []
  };

  componentDidMount() {
    this.setServices();
    this.setDoctors();
  }
  setServices = () => {
    let servicesArray = [];
    services.forEach(item => {
      const singleItem = { ...item };
      servicesArray = [...servicesArray, singleItem];
    });
    this.setState(() => {
      return { services: servicesArray };
    });
  };

  setDoctors = () => {
    let doctorsArray = [];
    doctors.forEach(item => {
      const singleItem = { ...item };
      doctorsArray = [...doctorsArray, singleItem];
    });
    this.setState(() => {
      return { doctors: doctorsArray };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
