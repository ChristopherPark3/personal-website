import { Variants } from "framer-motion"

const animateFunc = (variants: Variants) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants
  }
}