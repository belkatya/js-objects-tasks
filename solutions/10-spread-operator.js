// BEGIN
export default (name, addProperties = {}) => {
    const defaultProperties = {
        state: 'moderating',
        createdAt: Date.now(),
    };
    return {name, ...defaultProperties, ...addProperties};
}
// END