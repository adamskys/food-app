const API_URL =
  'https://react-http-32e65-default-rtdb.europe-west1.firebasedatabase.app';

export const getData = async (jsonName: string) => {
  const response = await fetch(`${API_URL}/${jsonName}.json`);

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseData = await response.json();

  return responseData;
};

export const postData = async (jsonName: string, data: {}) => {
  await fetch(`${API_URL}/${jsonName}.json`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

export const patchData = async (jsonName: string, id: string, data: {}) => {
  await fetch(`${API_URL}/${jsonName}/${id}.json`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
};
