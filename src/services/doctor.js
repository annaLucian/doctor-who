export const getData = async () => {
  const res = await fetch(
    'https://658892e6f50084a15a5899d1.mockapi.io/api/doctors',
  );
  const data = await res.json();
  return data;
};
