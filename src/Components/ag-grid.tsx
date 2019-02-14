import React from 'react';
import { Aggridmodel } from '../Models/aggrid';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

interface Props {
    fetchgridData: () => void,
    tableDef: Aggridmodel
}

interface State {
}

export default class AgGrid extends React.Component<Props, State> {

    componentDidMount() {
        this.props.fetchgridData();
    }

    render() {
        return (
            <div className="ag-theme-balham" style={{ height: '250px' }}  >
                <AgGridReact columnDefs={this.props.tableDef.colums} rowData={this.props.tableDef.row} />
            </div >
        )
    }

}