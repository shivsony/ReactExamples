export function addNum(num) {
    return {
      type: 'add',
      payload: num
    }
}

export function subNum(num) {
  return {
    type: 'sub',
    payload: num
  }
}
