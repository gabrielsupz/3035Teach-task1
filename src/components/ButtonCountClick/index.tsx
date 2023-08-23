import { useState } from 'react'
type Props = {
  Function: () => void
}
export function ButtonCountClick({ Function }: Props) {
  return <button onClick={() => Function()}>Click Me</button>
}
