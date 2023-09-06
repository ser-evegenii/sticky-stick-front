import {useEffect} from "react"

export const useToggleBodyOverflow = (isOpen) => {
 useEffect(() => {
  let hideOverflowTimer

  if (isOpen) {
   hideOverflowTimer = setTimeout(() => {
    document.body.style.overflow = "hidden"
   }, 0)
  } else {
   document.body.style.overflow = ""
  }

  return () => {
   clearTimeout(hideOverflowTimer)
   document.body.style.overflow = ""
  }
 }, [isOpen])
}