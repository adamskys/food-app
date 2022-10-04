const API_URL =
  'https://react-http-32e65-default-rtdb.europe-west1.firebasedatabase.app';

export const getData = async (jsonName) => {
  const response = await fetch(`${API_URL}/${jsonName}.json`);

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseData = await response.json();

  return responseData;
};

// add post method

export const postData = async (jsonName, data) => {
  await fetch(`${API_URL}/${jsonName}.json`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
