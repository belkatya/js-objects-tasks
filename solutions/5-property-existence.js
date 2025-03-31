import _ from 'lodash';

// BEGIN
export default (text) => {
    if (text === "")
        return {};
    const result = {};
    const words = text.split(' ');
    for (let word of words) {
        word = word.toLowerCase();
        if (Object.hasOwn(result, word))
            result[word] += 1;
        else
        result[word] = 1;
    }
    return result;
}
// END