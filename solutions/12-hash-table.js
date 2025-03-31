import crc32 from 'crc-32';

// BEGIN
export const make = () => {
  return [];
};
export const set = (map, key, value) => {
  const hash = crc32.str(key);
  if (map[hash] === undefined) {
    map[hash] = [key, value];
    return true;
  } 
  else {
    if (map[hash][0] !== key) {
      return false;
    } 
    else {
      map[hash][1] = value;
      return true;
    }
  }
};
export const get = (map, key, defaultValue = null) => {
  const hash = crc32.str(key);
  if (map[hash] === undefined) {
    return defaultValue;
  } 
  else {
    if (map[hash][0] !== key)
        return defaultValue;
    return map[hash][1];
  }
};
// END