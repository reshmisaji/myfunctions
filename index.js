export const isEmpty = (object) =>{
  if(Array.isArray(object)) return object.length===0
return Object.keys(object).length===0;
}

export const isOdd = (number) => {
  return number%2===1;
}

export const isEven = (number) => {
  return number%2===0;
}