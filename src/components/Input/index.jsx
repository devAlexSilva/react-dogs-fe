import * as S from './main.module.css'

export function Input({ type = 'text', name, value, setValue, onChange, onBlur, error }) {
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
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className={S.error}>{error}</p>
    </div>
  )
}