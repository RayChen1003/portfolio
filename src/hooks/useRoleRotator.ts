import { useState, useEffect } from 'react'

export function useRoleRotator(roles: string[], interval = 2500) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % roles.length)
        setVisible(true)
      }, 300)
    }, interval)
    return () => clearInterval(timer)
  }, [roles, interval])

  return { role: roles[index], visible }
}
