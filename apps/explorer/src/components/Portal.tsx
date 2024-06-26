import { PropsWithChildren } from 'react'

import { createPortal } from 'react-dom'

// mounts children in the body
// which isolates them from the overall App styles
// imported for inherited styles
// usual use cases -- tooltips, popups, modals
const Portal = ({ children }: PropsWithChildren) => {
  return createPortal(children, document.body)
}

export default Portal
