// search logic in the below function
export function filterSearchData(searchText, listOfRestaurant) {
  const lowerCaseSearchText = searchText.toLowerCase();
  const resultData = listOfRestaurant.filter((res) =>
    res?.data?.name?.toLowerCase().includes(lowerCaseSearchText)
  );

  return resultData;
}

// logic for increment and decrement item quantity
export const incrementQuantity = (count) => {
  count += 1;
  return count;
};

export const decrementQuantity = (count) => {
  if (count > 1) {
    count -= 1;
  }
  return count;
};
