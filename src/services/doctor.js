export const getData = async () => {
  const res = await fetch(
    'https://658892e6f50084a15a5899d1.mockapi.io/api/doctors',
  );
  const data = await res.json();
  return data;
};

export const filterData = (data, searchParam) => {
  let filteredDoctors;
  if (searchParam) {
    filteredDoctors = [...data].filter((el) => {
      const conditional =
        el.doctor.toLowerCase().includes(searchParam.toLowerCase()) ||
        el.actor.toLowerCase().includes(searchParam.toLowerCase());
      return conditional;
    });
  } else {
    filteredDoctors = [...data];
  }
  return filteredDoctors;
};
