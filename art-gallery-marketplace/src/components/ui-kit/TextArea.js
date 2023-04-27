export default function TextArea(props) {
    const { label, className, value, onChange, required, ...rest } = props
  
    const classes = `input textarea ${className}`
  
    return <label className='label'>
      {label}
      {required && <span className='required'> * </span>}
      <textarea
        className={classes}
        required={required}
        value={value}
        onChange={onChange}
        {...rest}
      ></textarea>
    </label>
  }
