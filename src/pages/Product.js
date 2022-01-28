import React from 'react';
import {Header} from '../components/ui/header';
import  './product.scss'
import Content from '../components/ui/content/Content';
import Footer from '../components/ui/footer';
const Product = () => {
    return (
        <>
        <div className="container">
              <Header />
              < Content />
              <Footer/>
        </div>
          
        </>
    );
};

export default Product;
