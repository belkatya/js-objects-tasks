import _ from 'lodash';

// BEGIN
export default (obj) => {
  obj.name = _.capitalize(obj.name);
  obj.description = obj.description.toLowerCase();
}
  // END