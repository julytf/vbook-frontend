export function truncate(str, n){
    return (str.length > n) ? str.slice(0, n-1) + '…' : str;
  };

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}