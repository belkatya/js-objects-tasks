// BEGIN
export default (obj) => {
    const result = {};
    for (const key in obj) {
        result[key] = obj[key];
    }
    return result;
}
// END
