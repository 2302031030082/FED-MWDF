import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import swal from 'sweetalert'; 

function Add_properties() {

    useEffect(() => {
        getData();
    }, []);

    const [categories, setCategories] = useState([]);

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setCategories(res.data);
    }

    const [formdata, setFormdata] = useState({
        id: "",
        cate_id: "",
        prop_name: "",
        location:"",
        expertise:"",
        experience:"",
        payment:"",
        price:"",
        prop_image:""
    });

    const changeHandel = (e) => {
        setFormdata({ ...formdata, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formdata);
    }
    function validation() {
        let ans = true;
        if (formdata.cate_id == "") {
            toast.error('Category Name Field is required');
            return false;
            ans = false;
        }
        if (formdata.prop_name == "") {
            toast.error('Product Name Field is required');
            return false;
            ans = false;
        }
        if (formdata.location == "") {
            toast.error('Location Field is required');
            return false;
            ans = false;
        }
        if (formdata.expertise == "") {
            toast.error('Expertise Field is required');
            return false;
            ans = false;
        }
         if (formdata.experience == "") {
            toast.error('Experience Field is required');
            return false;
            ans = false;
        }
         if (formdata.payment == "") {
            toast.error('Payment Field is required');
            return false;
            ans = false;
        }
         if (formdata.price == "") {
            toast.error('Price Field is required');
            return false;
            ans = false;
        }
         if (formdata.prop_image == "") {
            toast.error('Image Field is required');
            return false;
            ans = false;
        }

        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3000/properties`, formdata);
        console.log(res);
         swal("Good job!", "Property added Success!", "success");
        setFormdata({ ...formdata, cate_id: "",prop_name: "",location:"",expertise:"",experience:"",payment:"", price:"",prop_image:""});
    }
    return (
        <div>


            <div className="featured section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h6>| Product</h6>
                                <h2>Add Product</h2>
                            </div>

                            <div className="container mt-3">
                               
                                <form method="post" onSubmit={submitHandel}>
                                    <div className="form-floating mb-3 mt-3">
                                        <select onChange={changeHandel} className="form-control" name="cate_id">
                                                <option value="">Select Categories Name</option>
                                                {
                                                    categories.map((value)=>{
                                                        return(
                                                            <option value={value.id}>{value.cate_name}</option>
                                                        )
                                                    })
                                                }
                                        </select>    
                                        <label htmlFor="email">Select Categories Name</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.prop_name} className="form-control"  placeholder="Enter Properies Name" name="prop_name" required />
                                        <label htmlFor="email">Product Name</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.location} className="form-control"  placeholder="Enter Your location" name="location"required />
                                        <label htmlFor="email"> Your Location</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.expertise} className="form-control"  placeholder="Enter your expertise" name="expertise"required />
                                        <label htmlFor="email"> Your Expertise	</label>
                                    </div>
                                     <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.experience} className="form-control"  placeholder="Enter  of experience" name="experience" required />
                                        <label htmlFor="email">Experience		</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" onChange={changeHandel} value={formdata.payment} className="form-control"  placeholder="Enter Payment Method" name="payment" required />
                                        <label htmlFor="email">Payment_Mode</label>
                                    </div>
                                    <div className="form-floating mb-3 mt-3">
                                        <input type="number" onChange={changeHandel} value={formdata.price} className="form-control"  placeholder="Enter Properies Price" name="price" required />
                                        <label htmlFor="email">Price</label>
                                    </div>
                                    <div className="form-floating mt-3 mb-3">
                                        <input type="url" onChange={changeHandel} value={formdata.prop_image} className="form-control" id="pwd" placeholder="Enter Propertyies image url" name="prop_image" required/>
                                        <label htmlFor="pwd">URL of Image</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add_properties