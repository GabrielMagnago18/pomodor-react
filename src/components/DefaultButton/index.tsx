import styles from './styles.module.css'

import React from 'react'

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red"
} & React.ComponentProps<'button'>

export function DefaultButton({ icon, color = "green", ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  )
}

export default DefaultButton
