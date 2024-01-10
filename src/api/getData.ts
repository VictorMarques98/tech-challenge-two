export async function getData() {
  const response = await fetch('./src/assets/data.json');
  if (!response.ok) {
    throw new Error('An error occurred while fetching the weather data. Please try again later.');
  }
  const data = await response.json();
  return data;
}