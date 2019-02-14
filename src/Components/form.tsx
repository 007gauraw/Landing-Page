import React from 'react';
import { withFormik, FormikProps, FormikBag, Field } from 'formik';
import { Form, formDefaultValue } from '../Models/form';
import '../App.scss';
import { Row, Col } from 'antd';
import { CustomSelect } from './CustomComponunt';

interface Props {
    submitForm: (value: Form) => void,
    updateGridAction: (value: Form) => void
}

const InnerForm = (props: FormikProps<Form>) => {
    const { handleSubmit, values, handleBlur, handleChange, errors, touched } = props;

    return (
        <div className="requestForm">
            <form onSubmit={handleSubmit} className="actualForm">
                <Row>
                    <Col span={8}>
                        <Col span={12}>
                            <label htmlFor="dictionaryType" className="fieldLabel">
                                Dictionary Type
                            </label>
                        </Col>
                        <Col span={12}>
                            <Field
                                className="fieldSelect"
                                component="select"
                                name="dictionaryType"
                            >
                                <option value="" />
                                <option value="Red">Red</option>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                            </Field>
                        </Col>
                    </Col>
                    <Col span={8}>
                        <Col span={12}>
                            <label htmlFor="whoReqChanges" className="fieldLabel">
                                Who requested changes
                            </label>
                        </Col>
                        <Col span={12}>
                            <Field
                                component="select"
                                className="fieldSelect"
                                name="whoReqChanges"
                            >
                                <option value="" />
                                <option value="Jim">Jim</option>
                                <option value="Jhonn">Jhonn</option>
                                <option value="Mark">Mark</option>
                            </Field>
                        </Col>
                    </Col>
                    <Col span={8}>
                        <Col span={12}>
                            <label htmlFor="reqType" className="fieldLabel">
                                Request type
                            </label>
                        </Col>
                        <Col span={12}>
                            <Field
                                className="fieldSelect"
                                component="select"
                                name="reqType"
                            >
                                <option value="" />
                                <option value="get">get</option>
                                <option value="delete">delete</option>
                                <option value="Post">Post </option>
                            </Field>
                        </Col>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <div className="padding-sm" />
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Col span={12}>
                            <label htmlFor="description" className="fieldLabel">
                                Description
                            </label>
                        </Col>
                        <Col span={12}>
                            <Field

                                id="description"
                                type="textarea"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                                name="description"

                            />
                        </Col>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={12}>
                                <label htmlFor="dictionaryMonth" className="fieldLabel">
                                    Dictionary Month
                                </label>
                            </Col>
                            <Col span={12}>
                                <Field
                                    className="fieldSelect"
                                    component="select"
                                    name="dictionaryMonth"
                                >
                                    <option value="" />
                                    <option value="Jan">Jan</option>
                                    <option value="Feb">Feb</option>
                                    <option value="March">March</option>
                                </Field>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="padding-s" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <label htmlFor="coRequestTo" className="fieldLabel">
                                    Co-RequestTo
                                </label>
                            </Col>
                            <Col span={12}>
                                <Field
                                    className="fieldSelect"
                                    id="coRequestTo"
                                    type="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.coRequestTo}
                                    name="coRequestTo"
                                />
                                {errors.coRequestTo && touched.coRequestTo &&
                                    <div className="feedback">{errors.coRequestTo}</div>}
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={12}>
                                <label htmlFor="hierarchy" className="fieldLabel">
                                    Hierarchy
                                </label>
                            </Col>
                            <Col span={12}>
                                <Field
                                    className="fieldSelect"
                                    component="select"
                                    name="hierarchy"
                                    value={values.hierarchy}
                                >
                                    <option value="" />
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </Field>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="padding-sm" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <label htmlFor="status" className="custome">
                                    Status
                                </label>
                            </Col>
                            <Col span={12}>
                                <Field
                                    className="custome"
                                    component={CustomSelect}
                                    value={values.status}
                                    name="status"
                                />
                                {touched.status &&
                                    errors.status && <div className="feedback">{errors.status}</div>}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="padding-sm" />
                    </Col>
                </Row>
                <Row>
                    <Col span={8} />
                    <Col span={8}>
                        <Col span={12} />
                        <Col span={12} />
                    </Col>
                    <Col span={8}>
                        <Col span={12} />
                        <Col span={12}>
                            <button type="submit" >Submit</button>
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="padding-sm" />
                    </Col>
                </Row>
            </form>
        </div>
    )
};

const RequestForm = withFormik({
    handleSubmit: (formObj: Form, obj: FormikBag<Props, Form>) => {
        obj.props.submitForm(formObj);
        obj.setSubmitting(false);
        obj.resetForm(formDefaultValue);

    },
    validate: (formValue: Form, props: {}) => {
        const errors = { coRequestTo: '' }
        if (!formValue.coRequestTo) {
            errors.coRequestTo = 'Co Request can not be empty';
            return errors;
        }
        return undefined
    },
    mapPropsToValues: () => ({
        description: formDefaultValue.description,
        dictionaryType: formDefaultValue.dictionaryType,
        whoReqChanges: formDefaultValue.whoReqChanges,
        reqType: formDefaultValue.reqType,
        dictionaryMonth: formDefaultValue.dictionaryMonth,
        hierarchy: formDefaultValue.hierarchy,
        coRequestTo: formDefaultValue.coRequestTo,
        status: formDefaultValue.status
    })
})(InnerForm)

export default RequestForm;
