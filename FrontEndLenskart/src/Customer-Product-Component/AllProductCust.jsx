import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, InputLabel,  MenuItem, Select } from '@material-ui/core';
import { Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { axiosAllProducts, axiosGetBycategoryId } from '../Service-Components/ServiceProduct';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosAddToCart } from '../Service-Components/ServiceCart';
import axios from 'axios';
import DisplayImageCust from './DisplayImageCust';


toast.configure();

const AllProductCust = () => {

  const history = useHistory();
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts();
    axios.get('http://localhost:8083/category/findAll').then((response) => {
      setCategories(response.data);
      console.log(categories);
    });
  },[])//eslint-disable-line

  const getProducts = async () => {
    const response = await axiosAllProducts();
    console.log(response);
    setProduct(response.data);
  }
  const DisplayCategoryProducts = async (id) => {
    if (id !== "") {
      console.log(id);
      const response = await axiosGetBycategoryId(id);
      console.log(response);
      setProduct(response.data);
    }
    if (id === "") {
      console.log(id);
      getProducts();
    }


  }

  const notifysuccess = (msg) => {
    toast.success(msg, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'colored'
    });
  }

  const addToCart = async (id) => {
    let custid = sessionStorage.getItem('id');
    axiosAddToCart(custid, id);
    notifysuccess("Product added to cart successfully")
    history.push('/viewproducts');


  }

 
  return (
    <div >
      <div className="drop-cat">
        <InputLabel ><center>Product Category</center></InputLabel>
        <center><Select
          value={categories.categoryName}
          onChange={(e) => {
            const selectedCategoryId = e.target.value;
            DisplayCategoryProducts(selectedCategoryId);

          }}
          className="drop">
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.categoryId} value={category.categoryId}>
              {category.categoryName}
            </MenuItem>
          ))}
        </Select></center>
      </div>
      <div className='cardcontainer2'>

        <Container >

          <Grid container spacing={3} >
            {product.map((data) => (
              <Grid item key={data.productId} xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <div className="image-container">
                    <div className="image-wrapper">
                    <DisplayImageCust image={data.productImage}/>
                      <div className="hover-effect"></div>
                    </div>
                  </div>
                  <CardContent>
                    <Typography variant="h6">{data.productName}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Price: {data.productPrice}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => addToCart(data.productId)} style={{ marginLeft: '80px' }} variant="text" color="primary" size="small">Add To Cart</Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  )

}

export default AllProductCust;