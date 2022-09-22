const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unable to fetch puzzle");
  }
};

const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    })
    .then((data) => {
      return data.puzzle;
    });
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
  // const country = await getCountry(location.country);
  // return country;
};

const getCountry = async (countryCode) => {
  const response = await fetch("https://restcountries.com/v3.1/all");

  if (response.status === 200) {
    const data = await response.json();
    const country = data.find((ctr) => {
      return ctr.cca2 === countryCode;
    });
    return country;
  } else {
    throw new Error("Unable to fetch data");
  }
};

//Making an HTTP request

const getLocation = async () => {
  const response = await fetch("https://ipinfo.io/json?token=b71b7517eafd3c");

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("unable to fetch data");
  }
};
