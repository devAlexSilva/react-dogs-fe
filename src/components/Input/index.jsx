import * as S from './main.module.css'

export function Input({ setValue, value, type = 'text', name }) {
  return (
    <div className={S.wrapper}>
      <label className={S.label} htmlFor={name}>
        {name}
      </label>
      <input
        className={S.input}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p className={S.error}>Error</p>
    </div>
  )
}