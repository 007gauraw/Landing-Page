export interface Form {
        requestid?: number;
        dictionaryType: string,
        whoReqChanges: string,
        reqType: string,
        description: string,
        dictionaryMonth: string,
        hierarchy: string,
        coRequestTo: string,
        status: 'DRAFT' | 'APPROVED' | 'REJECTED'
}

export const formDefaultValue: Form = {
        dictionaryType: 'red',
        whoReqChanges: '',
        reqType: '',
        description: 'Hello',
        dictionaryMonth: '',
        hierarchy: '',
        coRequestTo: '',
        status: 'REJECTED'
}