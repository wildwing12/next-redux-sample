import React, {useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {test} from '.'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import NavBar from "../src/components/NavBar";
import Mainpage from "../src/components/Mainpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";

const Home = () => {

    const [api, setApi] = useState("");
    const [rowData] = useState([
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]);

    const [columnDefs] = useState([
        {field: 'make'},
        {field: 'model'},
        {field: 'price'}
    ])


    return (
        <div  >
            <NavBar/>
            <div className="top-contents">
                <Mainpage />
            </div>
            <style jsx>{`
            .top-contents {
                margin-top: 74px;
                height: 500vh;
                z-index: 1;
            }
            `}</style>
        </div>
    );
};
export default Home;