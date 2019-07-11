import React from 'react';
import './dashboard.css';



export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-6 banner'>
                        <div className='overlay'>
                            <p><i class="fa fa-fw fa-search"></i> <span>Follow your interests. </span></p>
                            <p><i class="fa fa-fw fa-users"></i> <span>Hear what people are talking about. </span></p>
                            <p><i class="fa fa-fw fa-comment"></i> <span>Join the conversation. </span></p>
                        </div>
                    </div>
                    <div className='col-sm-6 whitepart'>
                        <div className='whitediv'>
                            <div><i class="fa fa-fw fa-twitter fa-3x" ></i> <a href="#" class="btn btn-outline-primary btn-lg btn1" role="button" aria-pressed="true">Log in</a></div>
                            <p className='text1'><span >See what’s happening in<br></br>the world right now</span></p>

                            <p className='text2'><span>Join Twitter today.</span></p>
                            <div style={{ lineHeight: 3 }}>
                                <a href="#" class="btn btn-primary btn-lg btn2" role="button" aria-pressed="true" >Sign up</a><br></br>
                                <a href="#" class="btn btn-outline-primary btn-lg btn3" role="button" aria-pressed="true">Log in</a>
                            </div>

                        </div>

                    </div>
                </div>
                <nav class="nav">
                    <a class="nav-link" href="#">About</a>
                    <a class="nav-link" href="#">Help Center</a>
                    <a class="nav-link" href="#">Blogs</a>
                    <a class="nav-link" href="#">Status</a>
                    <a class="nav-link" href="#">Jobs</a>
                    <a class="nav-link" href="#">Terms</a>
                    <a class="nav-link" href="#">Privacy Policy</a>
                    <a class="nav-link" href="#">Cookies</a>
                    <a class="nav-link" href="#">Ads info</a>
                    <a class="nav-link" href="#">Brand</a>
                    <a class="nav-link" href="#">Apps</a>
                    <a class="nav-link" href="#">Advertise</a>
                    <a class="nav-link" href="#">Marketing</a>
                    <a class="nav-link" href="#">Businesses</a>
                    <a class="nav-link" href="#">Developers</a>
                    <a class="nav-link" href="#">Directory</a>
                    <a class="nav-link" href="#">Settings</a>
                    <a class="nav-link" href="#"> &copy; 2019 Twitter</a>
                    
                    
                </nav>


            </div>


        );
    }
}
