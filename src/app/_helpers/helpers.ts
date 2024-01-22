import { Variants } from "framer-motion"

export const animateFunc = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants
  }
}