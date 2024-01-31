export async function getCars() {
  const header = {
    "X-RapidAPI-Key": "1c277c52a1msh386212f6798c6d6p102c13jsn4fc033d679a4",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: header }
  );
  const data = await response.json();
  return data;
}
