import { flatten, map } from "rambda"

export function flatMap(fn, arr) {
  if (arguments.length === 1) {
    return (arrHolder) => flatMap(fn, arrHolder)
  }

  return flatten(map(fn, arr))
}
