import React from 'react';
import { FieldProps } from 'formik';
import { Form } from '../Models/form';
import { Select } from 'antd';

const Option = Select.Option;
export const CustomSelect = (
    {
        field,
        form: { values, setFieldValue },
        ...props
    }: FieldProps<Form>
) => {
    return (
        <Select
            showSearch={true}
            optionFilterProp="children"
            style={{ width: 200 }}
            {...field}
            {...props}
            filterOption={
                (input, option: any) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            onChange={(value) => { setFieldValue(field.name, value) }}
            value={values.status}
        >
            <Option value="DRAFT">DRAFT</Option>
            <Option value="APPROVED">APPROVED</Option>
            <Option value="REJECTED">REJECTED</Option>
        </Select>)
}