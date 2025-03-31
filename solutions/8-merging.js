import _ from 'lodash';

// BEGIN
export default (obj, keys, anotherObj) => {
    if (keys.length === 0)
        Object.assign(obj, anotherObj);
    else
        Object.assign(obj, _.pick(anotherObj, keys));
    return obj;
}
// END