import React, {useEffect, useState} from 'react';
import {AgGridReact} from 'ag-grid-react';
import {test} from '.'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import NavBar from "../src/components/NavBar";
import {testApi} from '../src/api'

const Home = () => {

    const [api, setApi]= useState("");
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
useEffect(()=>{
    testApi().then(res=>setApi(res));
},[])

    return (
        <NavBar>
            <div>
                {api}
            </div>
            <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}>
                </AgGridReact>
            </div>
        </NavBar>
    );
};
export default Home;