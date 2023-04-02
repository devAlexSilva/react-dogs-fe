import * as S from './main.module.css'

export function Input({setValue, value, type = 'text', name}) {
  return (
    <>
    <label htmlFor={name}>{name}</label>
    <input 
      type={type} 
      name={name}
      id={name}
      value={value}
      onChange={(e) => setValue(e.target.value)} />
      </>
  )
}