export interface Circle {
  readonly x: number;
  readonly y: number;
  readonly radius: number;
}
export interface Point {
  readonly x: number;
  readonly y: number;
}
export function intersectCircles(a: Circle, b: Circle): Point[] | null {
  if ([a, b].some((c) => !c || ![c.x, c.y, c.radius].every(Number.isFinite)))
    throw new TypeError('Circles must be finite');
  if (a.radius < 0 || b.radius < 0) throw new RangeError('Radii cannot be negative');
  const dx = b.x - a.x,
    dy = b.y - a.y,
    d = Math.hypot(dx, dy);
  if (d === 0) return a.radius === b.radius ? null : [];
  if (d > a.radius + b.radius || d < Math.abs(a.radius - b.radius)) return [];
  const along = (a.radius * a.radius - b.radius * b.radius + d * d) / (2 * d),
    h2 = a.radius * a.radius - along * along;
  if (h2 < -1e-10) return [];
  const h = Math.sqrt(Math.max(0, h2)),
    xm = a.x + (along * dx) / d,
    ym = a.y + (along * dy) / d,
    rx = (-dy * h) / d,
    ry = (dx * h) / d;
  return h === 0
    ? [{ x: xm, y: ym }]
    : [
        { x: xm + rx, y: ym + ry },
        { x: xm - rx, y: ym - ry },
      ];
}
