/*
 * Author:  Fedor Nikonov (fritylo)
 * Date:    2022-04-06, 9:35:52 PM
 * Company: frity corp.
 */

export default function __(props) {
   return exit(props.children);
}

export function exit(callback) {
   let res = [];
   let pusher = (component) => res.push(component);
   callback(pusher, 0);
   return res;
}