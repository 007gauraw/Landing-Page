import { connect } from 'react-redux'
import AgGridComponunt from '../Components/ag-grid'
import { fetchGridData } from '../Actions/index'
import { State } from '../Reducer/index'

const mapDispatchToProps = {
    fetchgridData: fetchGridData
}

const mapStateToProps = (state: State) => ({
    tableDef: state.grid.tableDef
})

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(AgGridComponunt);