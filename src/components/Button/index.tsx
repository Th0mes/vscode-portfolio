import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  color?: string
  height?: string
  width?: string
}

function Button({ children, color, height, width, ...props }: ButtonProps) {
  return (
    <Container
      style={{
        backgroundColor: color,
        height,
        width
      }}
      {...props}
    >
      {children}
    </Container>
  )
}

export default Button
