import './list.scss';
import Navbar from './../../Dashboard/NavbarAdmin';
import Datatable from './../../Dashboard/Datatable';
import Sidebar from './../../Dashboard/SidebarAdmin/index';
// import { DataUser } from '../../datasource';

function List({ input, data, title, link, img, row }) {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Datatable input={input} data={data} title={title} link={link} img={img} row={row} />
                {/* <DataUser /> */}
            </div>
        </div>
    );
}

export default List;
