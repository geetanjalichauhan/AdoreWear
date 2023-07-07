import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart, searchTerm }) => {
  const classes = useStyles();

  const getFilteredItems = (searchTerm, products) => {
    if (!searchTerm) {
      return products;
    }
    return products.filter((product) => product.name.includes(searchTerm));
  };

  const filteredItems = getFilteredItems(searchTerm, products);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {filteredItems.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
