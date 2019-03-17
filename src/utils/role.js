export function check(userRoles, needRoles) {
  if (!needRoles || userRoles.indexOf('admin') >= 0) {
    return true
  }
  return userRoles.some(r => {
    needRoles.indexOf(r) >= 0
  })
}