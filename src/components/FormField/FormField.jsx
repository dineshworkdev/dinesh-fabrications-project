/**
 * FormField
 * ---------
 * A single labeled form control. Supports text-like inputs, a textarea,
 * and a select — covers every field needed on the Contact and Request
 * Quote forms without duplicating label/error markup in each page.
 */
function FormField({
  id,
  label,
  type = 'text',
  as = 'input', // 'input' | 'textarea' | 'select'
  value,
  onChange,
  required = false,
  error,
  options = [], // for as="select": [{ value, label }]
  placeholder,
  rows = 5,
}) {
  const describedBy = error ? `${id}-error` : undefined

  const sharedProps = {
    id,
    name: id,
    value,
    onChange,
    required,
    placeholder,
    'aria-invalid': Boolean(error),
    'aria-describedby': describedBy,
  }

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
        {!required && <span className="form-optional"> (optional)</span>}
      </label>

      {as === 'textarea' && (
        <textarea
          {...sharedProps}
          rows={rows}
          className={'form-textarea' + (error ? ' form-textarea-error' : '')}
        />
      )}

      {as === 'select' && (
        <select
          {...sharedProps}
          className={'form-select' + (error ? ' form-select-error' : '')}
        >
          <option value="">Select an option</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {as === 'input' && (
        <input
          {...sharedProps}
          type={type}
          className={'form-input' + (error ? ' form-input-error' : '')}
        />
      )}

      {error && (
        <span id={`${id}-error`} className="form-error-text">
          {error}
        </span>
      )}
    </div>
  )
}

export default FormField
