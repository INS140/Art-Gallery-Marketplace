import React from "react"

export default function Input(props: any) {
  const { label, className, type, value, onChange, required, ...rest } = props

  const classes = `input ${className}`

  const inputType = type ? type : 'text'

  return <label className='label'>
    {label}
    {required && <span className='required'> * </span>}
    <input
      type={inputType}
      className={classes}
      required={required}
      value={value}
      onChange={onChange}
      {...rest}
    />
  </label>
}