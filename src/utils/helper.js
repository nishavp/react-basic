// search logic in the below function
export function filterSearchData(searchText, listOfRestaurant) {
  const lowerCaseSearchText = searchText.toLowerCase();
  const resultData = listOfRestaurant.filter((res) =>
    res?.data?.name?.toLowerCase().includes(lowerCaseSearchText)
  );

  return resultData;
}
