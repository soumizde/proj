# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button
} from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProductAnalytics = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [productSubtypes, setProductSubtypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [selectedSubtype, setSelectedSubtype] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchProductTypes();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch('/api/products').then(res => res.json());
    setProducts(data);
    setFilteredProducts(data);
  };

  const fetchProductTypes = async () => {
    const data = await fetch('/api/productTypes').then(res => res.json());
    setProductTypes(data);
  };

  const handleFilterChange = () => {
    let filtered = products;

    if (selectedType) {
      filtered = filtered.filter(product => product.type === selectedType);
      const subtypes = filtered.map(product => product.subtype).filter((value, index, self) => self.indexOf(value) === index);
      setProductSubtypes(subtypes);
    } else {
      setProductSubtypes([]);
    }

    if (selectedSubtype) {
      filtered = filtered.filter(product => product.subtype === selectedSubtype);
    }

    if (searchQuery) {
      filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    setFilteredProducts(filtered);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSelectedSubtype('');
    handleFilterChange();
  };

  const handleSubtypeChange = (event) => {
    setSelectedSubtype(event.target.value);
    handleFilterChange();
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    handleFilterChange();
  };

  const chartData = {
    labels: filteredProducts.map(product => product.name),
    datasets: [
      {
        label: 'All Products vs All Customers',
        data: filteredProducts.map(product => product.customers.length),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box padding={4}>
      <Box display="flex" alignItems="center" marginBottom={4}>
        <TextField
          label="Search by Product Name"
          variant="outlined"
          value={searchQuery}
          onChange={handleSearchChange}
          margin="normal"
          style={{ marginRight: 16 }}
        />
        <FormControl variant="outlined" margin="normal" style={{ minWidth: 120, marginRight: 16 }}>
          <InputLabel>Type</InputLabel>
          <Select
            value={selectedType}
            onChange={handleTypeChange}
            label="Type"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {productTypes.map(type => (
              <MenuItem key={type} value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" margin="normal" style={{ minWidth: 120, marginRight: 16 }} disabled={!selectedType}>
          <InputLabel>Subtype</InputLabel>
          <Select
            value={selectedSubtype}
            onChange={handleSubtypeChange}
            label="Subtype"
          >
            <MenuItem value=""><em>None</em></MenuItem>
            {productSubtypes.map(subtype => (
              <MenuItem key={subtype} value={subtype}>{subtype}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleFilterChange}>
          Apply Filters
        </Button>
      </Box>
      <Bar data={chartData} />
    </Box>
  );
};

export default ProductAnalytics;





This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
