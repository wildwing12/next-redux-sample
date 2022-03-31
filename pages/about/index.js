import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPostsSaga} from "../../src/sagas/posts";
import {AgGridReact} from "ag-grid-react";


function About() {
        const {loading,data,error} = useSelector(state => {
            return state.posts;
        });

        const [col, setCol] = useState([{field:"id"},{field:"title"},{field:"body"}])
        const dispatch = useDispatch();

        useEffect(()=>{
            dispatch(getPostsSaga());
        },[dispatch]);

        if(loading)return <div>loading....</div>;
        if(error)return <div>에러발생</div>;
        if(!data)return <div>데이터가 없습니다.</div>;


        return (

            <div className="ag-theme-alpine" style={{height: 530, width: 600}}>
                <AgGridReact
                    rowData={data}
                    columnDefs={col}
                    pagination={true}
                    paginationPageSize={10}
                    cacheBlockSize={10}
                >
                </AgGridReact>

            </div>
        );
    }

    export default About;