import React from 'react';
// import axios from 'axios';
import './home.scss';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer/index';
import SiderBar from '../../Components/SiderBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class HomePage extends React.Component {
    // state = {
    //     listProducts: [],
    // };

    // async componentDidMount() {
    //     let data = await axios('http://localhost:8080/api/products');
    //     console.log(data);
    //     this.setState({
    //         listProducts: data.data,
    //     });
    // }

    render() {
        // let { listProducts } = this.state;
        return (
            <React.Fragment>
                <Header />
                <div className="pluto-wrap">
                    <div className="pluto-header">
                        <div className="pluto-menu-banner">
                            <SiderBar />
                            <div className="pluto-banner">
                                <div className="banner"></div>
                                <div className="banner-left">
                                    <div className="banner-left-items">
                                        <img
                                            src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/RightBanner_Desktop%2011.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="banner-left-items ">
                                        <img
                                            src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/RightBanner_ipad%20m1%20desk.png"
                                            alt="logo"
                                        />
                                    </div>
                                    <div className="banner-left-items">
                                        <img
                                            src="https://cdn2.cellphones.com.vn/690x300/https://dashboard.cellphones.com.vn/storage/zenbook%2014.png"
                                            alt="logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pluto-list-items">
                        <div className="menu-items">
                            <div className="menu-item">
                                <div className="item-product">
                                    <img
                                        src="https://cdn.oneesports.vn/cdn-data/sites/4/2022/03/ANime-db-1-450x236.jpg"
                                        alt=""
                                    />
                                    <div className="name-product">
                                        <p>iphone 13 pro max</p>
                                    </div>
                                    <div className="price-product">12312321đ</div>
                                    <div className="discription-product">đây là iphone 13 promax</div>
                                    <div className="ratting">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                            <div className="menu-item"></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default HomePage;
