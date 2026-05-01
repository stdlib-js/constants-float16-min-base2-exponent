/** @license Apache-2.0 */

'use strict';

/**
* The minimum biased base 2 exponent for a normal half-precision floating-point number.
*
* @module @stdlib/constants-float16-min-base2-exponent
* @type {integer32}
*
* @example
* var FLOAT16_MIN_BASE2_EXPONENT = require( '@stdlib/constants-float16-min-base2-exponent' );
* // returns -14
*/


// MAIN //

/**
* The minimum biased base 2 exponent for a normal half-precision floating-point number.
*
* ```text
* 1 - BIAS = -14
* ```
*
* where `BIAS = 15`.
*
* @constant
* @type {integer32}
* @default -14
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT16_MIN_BASE2_EXPONENT = -14|0; // eslint-disable-line id-length


// EXPORTS //

module.exports = FLOAT16_MIN_BASE2_EXPONENT;
