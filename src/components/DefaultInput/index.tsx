import styles from './styles.module.css'

import React from 'react'

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} className={styles.input} {...rest} />
    </>
  )
}

export default DefaultInput
