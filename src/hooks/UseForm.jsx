import { useState } from "react"

const types = {
  email: {
    regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: 'digite um email válido'
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/, //range com intervalo aberto
    message: 'deve ter entre 8 e 16 caracteres com ao menos um numero e letra'
  }
}

export function UseForm(type) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)
  const fieldValue = types[type]
  
  
  function validate(value) {
    if (type === false) return true //quando explicitamente não quero validar
    
    if (value.length === 0) {
      setError('campo vazio')
      return false
    }
    else if (fieldValue && !fieldValue.regex.test(value)) {
      setError(fieldValue.message)
      return false
    }
    else {
      setError(false)
      return true
    }
  }
  
  function onChange({ target }) {
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    isValid: () => validate(value),
    onBlur: () => validate(value)
  }
}