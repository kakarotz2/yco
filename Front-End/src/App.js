import React, { useState, useEffect } from 'react';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login/index';
import RegisterPage from './Pages/Register';
import AdminPage from './Pages/Admin/index';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import List from './Pages/Admin/Page/List';
import Single from './Pages/Admin/Page/Single/index';
import New from './Pages/Admin/Page/New/index';
import { productInputs, userInputs } from './Pages/Admin/formSource';
import { productColumns, userColumns, orderColumns } from './Pages/Admin/datasource';
import axios from 'axios';

function App() {
    // lấy dữ liệu từ server
    const [dataUser, setDataUser] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
        axios.get('/api/users').then((res) => {
            setUser(res.data);
        });
    }, []);

    useEffect(() => {
        let res = user.map((item, index) => {
            return {
                _id: item._id,
                id: index + 1,
                userName: item.userName,
                name: item.firstName + ' ' + item.lastName,
                email: item.email,
                role: item.role,
                number: '0' + item.numberPhone || 'Không có',
                adress: item.adress || '18 Phố Viên',
                createAt: item.createAt.toString().slice(0, 10),
                status: item.status || 'Đang hoạt động',
            };
        });
        setDataUser(res);
    }, [user]);

    const [dataProduct, setDataProduct] = useState([]);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then((res) => {
            setProduct(res.data);
        });
    }, []);

    useEffect(() => {
        let res = product.map((item, index) => {
            return {
                id: index + 1,
                name: item.name,
                img: item.url,
                trademark: item.trademark,
                type: item.type,
                price: item.price.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                }),
                amount: item.amount,
                createAt: item.createAt.toString().slice(0, 10),
                status: item.status || 'Đang hoạt động',
            };
        });
        setDataProduct(res);
    }, [product]);
    //
    const [dataOrder, setDataOrder] = useState([]);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        axios.get('/api/order/list').then((res) => {
            setOrder(res.data);
        });
    }, []);
    useEffect(() => {
        let res = order.map((item, index) => {
            return {
                id: index + 1,
                name: item.name,
                product: item.product,
                paymentMethod: item.paymentMethod,
                phonenumber: item.phonenumber,
                price: item.price || 'free',
                createAt: item.createAt.toString().slice(0, 10),
                status: item.status,
            };
        });
        setDataOrder(res);
    }, [order]);

    // loadding
    const [isloading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <Router>
            <div>
                {isloading ? (
                    <div className="loader-container">
                        <div className="spinner"></div>
                    </div>
                ) : (
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/admin" exact={true}>
                            <Route index element={<AdminPage />} />
                            <Route path="user">
                                <Route
                                    index
                                    element={
                                        <List
                                            row={'auto'}
                                            input={dataUser}
                                            data={userColumns}
                                            title="Danh sách người dùng"
                                            link="/admin/user/new"
                                        />
                                    }
                                />
                                <Route path="single" element={<Single />} />
                                <Route path="new" element={<New inputs={userInputs} title="Thêm thành viên" />} />
                            </Route>
                            <Route path="products">
                                <Route
                                    index
                                    element={
                                        <List
                                            // img={img}
                                            row={96}
                                            input={dataProduct}
                                            data={productColumns}
                                            title="Danh sách sản phẩm"
                                            link="/admin/products/new"
                                        />
                                    }
                                />
                                <Route path="single" element={<Single />} />
                                <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
                            </Route>
                            <Route path="order">
                                <Route
                                    index
                                    element={
                                        <List
                                            row={'auto'}
                                            input={dataOrder}
                                            data={orderColumns}
                                            title="Danh sách người dùng"
                                            link="/admin/order"
                                        />
                                    }
                                />
                            </Route>
                        </Route>
                    </Routes>
                )}
            </div>
        </Router>
    );
}

export default App;
