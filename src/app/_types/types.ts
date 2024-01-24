import { Variants } from "framer-motion"

export type MotionProps = {
  initial: MotionProp,
  enter: MotionProp,
  exit: MotionProp
  variants?: Variants
}

export type MotionProp = {
  [key: string]: number | number[] | string | MotionProp
}