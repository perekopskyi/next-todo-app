import { ReactNode } from 'react'

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
}

interface Button {
  children: ReactNode
  onClick: () => void
  type: ButtonType
}

export const Button = ({ children, onClick, type }: Button) => {
  const classes = {
    [ButtonType.primary]: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-600',
    [ButtonType.secondary]: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-600',
    [ButtonType.danger]: 'bg-red-500 hover:bg-red-600 focus:ring-red-600',
  }

  return (
    <button
      className={`ml-2 py-2 px-4 border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2  focus:ring-opacity-50 text-xs text-cyan-50 ${classes[type]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
