import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function User() {
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

    const [idUser, setIdUser] = useState('');
    useEffect(() => {
        axios
            .delete('/api/admin/user/delete', { data: { id: idUser } })
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const userColumns = [
        { field: 'id', headerName: 'ID', width: 60 },
        {
            field: 'name',
            headerName: 'Họ Và Tên',
            width: 196,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 196,
        },
        {
            field: 'userName',
            headerName: 'Username',
            width: 124,
        },

        {
            field: 'role',
            headerName: 'Chức vụ',
            width: 124,
            height: 12,
        },
        {
            field: 'number',
            headerName: 'Số điện thoại',
            width: 156,
        },
        {
            field: 'adress',
            headerName: 'Địa chỉ',
            width: 240,
        },
        {
            field: 'createAt',
            headerName: 'Ngày tạo',
            width: 124,
        },
        {
            field: 'status',
            headerName: 'Trạng thái',
            width: 162,
            renderCell: (params) => {
                return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
            },
        },
        {
            field: 'action',
            headerName: 'Hành động',
            width: 200,
            renderCell: (params) => {
                const handlerDelete = () => {
                    axios
                        .delete('/api/admin/user/delete', { data: { id: idUser } })
                        .then((data) => {
                            console.log(data);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                };
                return (
                    <div className="cellAction">
                        <Link to="/admin/user/single" style={{ textDecoration: 'none' }}>
                            <div className="viewButton">Xem</div>
                        </Link>
                        <Link to="/admin/user/single" style={{ textDecoration: 'none' }}>
                            <div className="editButton">Sửa</div>
                        </Link>
                        <button
                            type="button"
                            className="deleteButton"
                            onClick={() => {
                                handlerDelete();
                                setIdUser(params.row._id);
                            }}
                        >
                            Xóa
                        </button>
                    </div>
                );
            },
        },
    ];
    return (
        <DataGrid
            className="datagrid"
            rows={dataUser}
            columns={userColumns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    );
}
export { User };
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'name',
        headerName: 'Họ Và Tên',
        width: 196,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 196,
    },
    {
        field: 'userName',
        headerName: 'Username',
        width: 124,
    },

    {
        field: 'role',
        headerName: 'Chức vụ',
        width: 124,
        height: 12,
    },
    {
        field: 'number',
        headerName: 'Số điện thoại',
        width: 156,
    },
    {
        field: 'adress',
        headerName: 'Địa chỉ',
        width: 240,
    },
    {
        field: 'createAt',
        headerName: 'Ngày tạo',
        width: 124,
    },
    {
        field: 'status',
        headerName: 'Trạng thái',
        width: 162,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        },
    },
    {
        field: 'action',
        headerName: 'Hành động',
        width: 200,
        renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to="/admin/user/single" style={{ textDecoration: 'none' }}>
                        <div className="viewButton">Xem</div>
                    </Link>
                    <Link to="/admin/user/single" style={{ textDecoration: 'none' }}>
                        <div className="editButton">Sửa</div>
                    </Link>
                    <button className="deleteButton">Xóa</button>
                </div>
            );
        },
    },
];

// all product
export const productColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'name',
        headerName: 'Tên sản phẩm',
        width: 196,
    },
    {
        field: 'img',
        headerName: 'Hình ảnh',
        width: 196,
        renderCell: (params) => {
            return <img style={{ width: 72 }} src={params.row.img} alt="d" />;
        },
    },
    {
        field: 'trademark',
        headerName: 'Thương hiệu',
        width: 124,
    },
    {
        field: 'type',
        headerName: 'Nhà cung cấp',
        width: 162,
    },

    {
        field: 'amount',
        headerName: 'Số lượng',
        width: 100,
    },
    {
        field: 'price',
        headerName: 'Đơn giá',
        width: 124,
    },
    {
        field: 'createAt',
        headerName: 'Ngày tạo',
        width: 124,
    },
    {
        field: 'status',
        headerName: 'Trạng thái',
        width: 162,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        },
    },
    {
        field: 'action',
        headerName: 'Hành động',
        width: 240,
        renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to="/admin/products/single" style={{ textDecoration: 'none' }}>
                        <div className="viewButton" title="Xem">
                            <FontAwesomeIcon icon={faEye} />
                        </div>
                    </Link>
                    <Link to="/admin/product/single" style={{ textDecoration: 'none' }}>
                        <div className="editButton" title="Sửa">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                    </Link>
                    <button className="deleteButton" title="Xóa">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            );
        },
    },
];

export const orderColumns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'name',
        headerName: 'Tên khách hàng',
        width: 196,
    },
    {
        field: 'product',
        headerName: 'Tên sản phẩm',
        width: 196,
    },
    {
        field: 'price',
        headerName: 'Giá',
        width: 124,
    },
    {
        field: 'paymentMethod',
        headerName: 'Thanh toán',
        width: 162,
    },

    {
        field: 'phonenumber',
        headerName: 'Số điện thoại',
        width: 124,
    },

    {
        field: 'adress',
        headerName: 'Địa chỉ nhận hàng',
        width: 240,
    },
    {
        field: 'createAt',
        headerName: 'Ngày mua',
        width: 124,
    },
    {
        field: 'status',
        headerName: 'Trạng thái',
        width: 162,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>;
        },
    },
    {
        field: 'action',
        headerName: 'Hành động',
        width: 200,
        renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to="/admin/products/single" style={{ textDecoration: 'none' }}>
                        <div className="viewButton">Xem</div>
                    </Link>
                    <Link to="/admin/product/single" style={{ textDecoration: 'none' }}>
                        <div className="editButton">Sửa</div>
                    </Link>
                    <button className="deleteButton">Xóa</button>
                </div>
            );
        },
    },
];
