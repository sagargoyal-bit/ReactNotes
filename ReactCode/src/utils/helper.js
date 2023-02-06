export function filterData(search, data) {
  let filteredList = data.filter((list) => list.data.name.includes(search));
  return filteredList;
}
