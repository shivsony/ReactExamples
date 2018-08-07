export function setName(name) {
    return {
      type: 'change_name',
      payload: name
    }
}

export function setAge(age) {
  return {
    type: 'change_age',
    payload: age
  }
}
