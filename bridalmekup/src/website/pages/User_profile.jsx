import axios from 'axios';
import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function User_profile() {

    const redirect=useNavigate();
    useEffect(() => {
        getData();
    }, []);

    const [user, setUsers] = useState({});

    const getData = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('u_id')}`);
        console.log(res.data);
        setUsers(res.data);
    }
  return (
    <div>
             <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="breadcrumb"><a href="#">Home</a> /My Profile</span>
                            <h3>My Profile</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section best-deal">
                <div className="container">
                      <h1 className='mt-3 mb-3'>My Account</h1>
                    <div className="row">
                        
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                  
                                    <div className="tab-content" id="myTabContent">
                                       
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="info-table">
                                                        <ul>
                                                            <li>ID <span>{user.id}</span></li>
                                                            <li>Name <span>{user.name}</span></li>
                                                            <li>Email<span>{user.email}</span></li>
                                                            <li>Mobile<span>{user.mobile}</span></li>
                                                            <li>Password<span>{user.password}</span></li>
                                                            <li><button className='btn btn-primary' onClick={()=>redirect('/edit_profile/'+user.id) }>EDIT</button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <img  src="https://icon-library.com/images/user-icon/user-icon-7.jpg" alt />
                                                </div>
                                               
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            
        
        </div>
  )
}

export default User_profile