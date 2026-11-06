import * as api from '@lp-labs/circle-intersection';
import { intersectCircles } from '@lp-labs/circle-intersection';
console.log(intersectCircles({ x: 0, y: 0, radius: 5 }, { x: 8, y: 0, radius: 5 }));
// @ts-expect-error invalid argument must be rejected by declarations
api.intersectCircles({ x: 0, y: 0, radius: 'one' }, { x: 1, y: 0, radius: 1 });
