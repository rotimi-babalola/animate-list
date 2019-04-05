const swap = (arr, from, to) => {
  const arrCopy = [...arr];
  const tmp = arrCopy[from];

  arrCopy[from] = arrCopy[to];
  arrCopy[to] = tmp;
  return arrCopy;
};

export default swap;
