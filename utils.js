/**
 * @typedef {Object|Array} Collection
 */

/**
 * Utility for map-like iteration over object literals. Its interface matches lodash's signature for _.map.
 *
 * @param {Collection} collection - the collection to iterate over
 * @param {Function} callback - Callback invoked on each value/index.  It is passed (value, index) to match lodash's signature for match.
 * @returns {Array}
 */
export const map = (collection, callback) => {
  const retArr = [];
  for(const [i, v] of Object.entries(object)) {
    retArr[i] = callback(v, i);
  }
  return retArr;
}

/**
 * Utility for reduce-like iteration over any type of collection. Matches lodash's `_.reduce`
 *
 * Callback signature should match (accumulator, value, key|index, collection)
 *
 * @param {Collection} collection - the collection to iterate over
 * @param {Function} callback - the callback to be called for each key/value
 * @param {*} accumulator - the initial value to aggregate within the reduce callback
 * @returns {*} - the aggregated value of the accumulator
 */
export const reduce = (collection, callback, accumulator) => {
  for(const [i, v] of Object.entries(collection)) {
    accumulator = callback(accumulator, v, i, collection);
  }
  return accumulator;
}
