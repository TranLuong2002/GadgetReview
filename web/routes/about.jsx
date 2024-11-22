import React, { useState, useEffect } from "react";
import { Card, Page, Select, Layout } from "@shopify/polaris";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { api } from "../api"; // Adjust the import path as necessary


export default function About() {
  const currencies = ["USD", "EUR", "GBP", "JPY", "VND"];
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      setExchangeRate(data.rates[toCurrency]);
    };
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  return (
    <div>
      <Page title="Currency Converter" divider>
        <Card sectioned>
          <div alignment="center" spacing="loose">
            <Select
              label="From Currency"
              options={currencies.map((currency) => ({ label: currency, value: currency }))}
              onChange={(value) => setFromCurrency(value)}
              value={fromCurrency}
            />
            <Select
              label="To Currency"
              options={currencies.map((currency) => ({ label: currency, value: currency }))}
              onChange={(value) => setToCurrency(value)}
              value={toCurrency}
            />
          </div>
        </Card>
        {products.map((product) => (
          <Layout.Section key={product.id}>
            <Card sectioned>
              <div alignment="center" distribution="equalSpacing">
                <p>
                  <strong>{product.title}</strong>
                </p>
                <p>Original Price: {product.price} {fromCurrency}</p>
                <p>
                  Converted Price: {(product.price * exchangeRate).toFixed(2)} {toCurrency}
                </p>
              </div>
            </Card>
          </Layout.Section>
        ))}
      </Page>
    </div>
  );
}