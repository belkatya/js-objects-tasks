// BEGIN
export default (firstCompany, secondCompany) => {
    if ((firstCompany.name === secondCompany.name) && (firstCompany.state === secondCompany.state) && (firstCompany.website === secondCompany.website))
        return true;
    return false;
}
// END