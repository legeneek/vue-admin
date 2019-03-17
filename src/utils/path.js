const path = {
  join(pa, pb) {
    return pa.replace(/\/$/, '') + '/' + pb.replace(/^\//, '')
  }
}

export default path