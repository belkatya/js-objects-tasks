// BEGIN
export default (users) => {
    let result = [];
    for (const {name} of users) {
        result.push(name);
    }
    return result.sort()
}
// END