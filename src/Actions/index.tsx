import { Form } from '../Models/form'
import { Aggridmodel } from '../Models/aggrid'
import axios from 'axios';

export enum ActionTypes {
    SUBMIT_FORM = 'SUBMIT_FORM',
    GET_GRID_DATA = 'GET_GRID_DATA',
    UPDATE_GRID = 'UPDATE_GRID'
}

export interface SubmitForm {
    type: ActionTypes.SUBMIT_FORM,
    Payload: {
        form: Form
    }
}

export interface GetDridData {
    type: ActionTypes.GET_GRID_DATA,
    Payload: {
        tableDef: Aggridmodel
    }
}

export interface UpdateGrid {
    type: ActionTypes.UPDATE_GRID,
    Payload: {
        form: Form
    }
}

export function updateGridAction(form: Form): UpdateGrid {
    return {
        type: ActionTypes.UPDATE_GRID,
        Payload: {
            form: form
        }
    }
}

export function submitFormPost(form: Form) {
    return (dispatch: any) => {
        return axios.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then((responce: any) => {
            debugger;
            dispatch(updateGridAction(form));
        }).catch((err: any) => {
            debugger;
            console.log(err)
        })
    }
}
export function getGridData(def: Aggridmodel): GetDridData {
    return {
        type: ActionTypes.GET_GRID_DATA,
        Payload: {
            tableDef: def
        }
    }
}

// async function to load table def
export function fetchGridData() {
    return (dispatch: any) => {
        return axios.get('https://jsonplaceholder.typicode.com/todos/').then((responce) => {
            dispatch(getGridData({
                row: [
                    {
                        dictionaryType: 'Red',
                        whoReqChanges: 'jim',
                        reqType: 'get',
                        description: 'hmm',
                        dictionaryMonth: 'jan',
                        hierarchy: 'A',
                        coRequestTo: 'asdas',
                        status: 'APPROVED'
                    },
                ], colums: [
                    { headerName: 'Request Type', field: 'reqType' },
                    { headerName: 'Dictionary Type', field: 'dictionaryType' },
                    { headerName: 'Who Request changes', field: 'whoReqChanges' },
                    { headerName: 'Description', field: 'description' },
                    { headerName: 'Dictinary Month', field: 'dictionaryMonth' },
                    { headerName: 'Hierarchy', field: 'hierarchy' },
                    { headerName: 'Co-request To', field: 'coRequestTo' },
                    { headerName: 'Status', field: 'status' }
                ]
            }))
        })
    }
}
export type Action = SubmitForm | GetDridData | UpdateGrid;
