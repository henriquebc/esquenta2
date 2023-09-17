//algoritimo01
function maxVal1(A) {
  let max = A[0]
  for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i]
    }
  }
  return max;
}
//algoritimo02
function maxVal2(A, init, end) {
  if (end - init <= 1) {
    return Math.max(A[init], A[end])
  } else {
    const m = Math.floor((init + end) / 2)
    const v1 = maxVal2(A, init, m)
    const v2 = maxVal2(A, m + 1, end)
    return Math.max(v1, v2)
  }
}
module.exports = {
  maxVal1,
  maxVal2
}
