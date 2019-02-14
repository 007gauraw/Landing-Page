import { connect } from 'react-redux'
import RequestForm from '../Components/form'
import * as actionCreator from '../Actions/index'

const mapDispatchToProps = {
    submitForm: actionCreator.submitFormPost,
    updateGridAction: actionCreator.updateGridAction
}

export default connect<any, any, any>(null, mapDispatchToProps)(RequestForm);