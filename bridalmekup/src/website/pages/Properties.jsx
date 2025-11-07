import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Properties() {

    useEffect(() => {
        getCate();
        getProp();
    }, []);

    const [categories, setCategories] = useState([]);

    const getCate = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setCategories(res.data);
    }



    const [properties, setProperties] = useState([]);

    const getProp = async () => {
        const res = await axios.get(`http://localhost:3000/properties`);
        console.log(res.data);
        setProperties(res.data);
    }

    return (
        <div>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb"><a href="#">Home</a> / Categories</span>
                            <h3>Categories</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section properties">
                <div className="container">
                    <ul className="properties-filter">
                        <li>
                            <a className="is_active" href="#!" data-filter="*">Show All</a>
                        </li>
                        {
                            categories.map((value) => {
                                return (
                                    <li>
                                        <a href="#!" data-filter={"."+value.cate_name}>{value.cate_name}</a>
                                    </li>
                                )
                            })
                        }



                    </ul>
                    <div className="row properties-box">

                        {
                            properties.map((value) => {
                                return (
                                    <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6">
                                        <div className="item">
                                            <a href="property-details"><img src={value.prop_image} height="250px" alt /></a>
                                            <span className="category">{value.prop_name}</span>
                                            <h6>{value.price}</h6>
                                           <h4><Link to={'/property-details/'+value.id}>{value.prop_name}</Link></h4>
                                            <ul>
                                                <li>Location: <span>{value.location}</span></li>
                                                <li>Expertise: <span>{value.expertise}</span></li>
                                                <li>Experience: <span>{value.experience}</span></li>
                                                <li>Payment: <span>{value.payment}</span></li>
                                                
                                            </ul>
                                            <div className="main-button">
                                                <a href="property-details">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="pagination">
                                <li><a href="#">1</a></li>
                                <li><a className="is_active" href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">&gt;&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Properties