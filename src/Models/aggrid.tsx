import { Form } from './form';

export interface Aggridmodel {
    colums: {
        headerName: string, field: string
    }[],
    row: Form[]
}
