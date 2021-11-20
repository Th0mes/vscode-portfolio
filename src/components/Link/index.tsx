import * as React from 'react'
import { Link } from './styles'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
  prefetch?: boolean
  // we can add more properties we need from next/link in the future
}

// Forward Refs, is useful
export default React.forwardRef(
  ({ to, prefetch, ...props }: LinkProps, ref: any) => {
    return (
      <Link href={to} prefetch={prefetch || false}>
        <a {...props} ref={ref} />
      </Link>
    )
  }
)
