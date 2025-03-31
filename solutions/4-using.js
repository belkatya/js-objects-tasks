import { replace } from "lodash";

// BEGIN
export default (siteName) => {
    let result;
    if (siteName.startsWith('https'))
        result = {scheme: 'https', name: siteName.replace('https://', '')};
    else 
        result = {scheme: 'http', name: siteName.replace('http://', '')};
    return result;
}
// END