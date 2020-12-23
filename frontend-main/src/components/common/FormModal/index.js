import React, { Component } from 'react'
import { Formik } from 'formik'

export default class FormModel extends Component {
  render () {
    const { initialValues, handleSubmit, component } = this.props
    return (
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={props => {
          return React.cloneElement(component, props)
        }}
      />
    )
  }
}
