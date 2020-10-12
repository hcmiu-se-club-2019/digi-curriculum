import React from 'react'

const Input = props => {
  const {
    className = '',
    name,
    required,
    label,
    type = 'text',
    placeholder = '',
    disabled,
    field,
    min,
    max,
    form: { touched, errors }
  } = props

  return (
    <div className={`form-group mt-3 mb-3 input-group ${className}`}>
      <label className='label label-input'>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        className='w-100 form-control'
        name={name}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onChange={field.onChange}
        onBlur={field.onBlur}
        id={field.name}
        value={field.value}
        required={required}
        style={{ height: 42 }}
        min={min}
        max={max}
      />
      <span className='error-message'>
        {touched[field.name] && errors[field.name]}
      </span>
    </div>
  )
}

export default Input
