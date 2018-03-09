export function clamp(num, min, max) {
  if (num < min) return min
  if (num > max) return max
  return num
}

export function lerp(a, b, delta) {
  return clamp(delta, 0, 1) * (b - a) + a
}

export function randomRange(min, max) {
  return lerp(min, max, Math.random())
}

export function distance(point, other) {
  return ((other.x - point.x) ** 2 + (other.y - point.y) ** 2) ** 0.5
}
