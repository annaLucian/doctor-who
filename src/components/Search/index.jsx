'use client';
import { useState } from 'react';
import { FormSearch } from './search.styles';
import { useRouter } from 'next/navigation';
export default function Search({ setOpen }) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/doctors?search=${searchValue}`);
    setOpen(false);
    setSearchValue('');
  };

  return (
    <FormSearch
      data-testid="search-form"
      onSubmit={(event) => handleSubmit(event)}
    >
      <svg
        className="SearchIcon"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.485 20.3248L13.223 14.0571C12.723 14.4835 12.148 14.8135 11.498 15.047C10.848 15.2806 10.1947 15.3973 9.538 15.3973C7.93667 15.3973 6.58133 14.8425 5.472 13.7328C4.36267 12.6225 3.808 11.2663 3.808 9.6642C3.808 8.06209 4.362 6.70521 5.47 5.59355C6.57867 4.48121 7.93333 3.92505 9.534 3.92505C11.1353 3.92505 12.4913 4.48021 13.602 5.59054C14.7127 6.70087 15.268 8.05776 15.268 9.66119C15.268 10.3565 15.145 11.0294 14.899 11.68C14.6523 12.3306 14.329 12.8871 13.929 13.3495L20.191 19.6161L19.485 20.3248ZM9.538 14.3954C10.8647 14.3954 11.985 13.9384 12.899 13.0242C13.8123 12.1101 14.269 10.9887 14.269 9.66019C14.269 8.33233 13.8123 7.21133 12.899 6.29718C11.9857 5.38302 10.8657 4.92595 9.539 4.92595C8.21233 4.92595 7.092 5.38302 6.178 6.29718C5.26467 7.21133 4.808 8.33233 4.808 9.66019C4.808 10.9881 5.26467 12.1091 6.178 13.0232C7.09133 13.9374 8.21133 14.3954 9.538 14.3954Z"
          fill="white"
        />
      </svg>
      <input
        type="text"
        autoComplete="off"
        id="searchBar"
        placeholder="Buscar"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
    </FormSearch>
  );
}
