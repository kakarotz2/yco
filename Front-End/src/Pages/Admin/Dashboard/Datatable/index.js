import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import React from 'react';

function Datatable({ input, data, title, link, row }) {
    // const [deleteUser, setIdDeleteUser] = useState([input]);
    // setIdDeleteUser(deleteUser.id);
    return (
        <React.Fragment>
            <div className="datatable">
                <div className="datatableTitle">
                    <p className="animate-charcter">{title}</p>
                    <Link to={link} className="link">
                        Thêm mới
                    </Link>
                </div>
                <DataGrid
                    rowHeight={row}
                    className="datagrid"
                    rows={input}
                    columns={data}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </React.Fragment>
    );
}

export default Datatable;
