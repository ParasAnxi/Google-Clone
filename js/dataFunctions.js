import { getMaxChars } from './utils.js';

async function handleSearch(currentText) {
  const searchString = getSearchString(currentText);
  const rawData = await fetchData(searchString);
  return selectData(rawData);
}

function getSearchString(currentText) {
  const maxChars = getMaxChars();
  return `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${currentText}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
}

async function fetchData(searchString) {
  try {
    const response = await fetch(searchString);
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
}

function selectData(rawData) {
  const dataObject = rawData.query?.pages;
  const parsedData = [];

  for (let i in dataObject) {
    const entry = {
      title: dataObject[i].title,
      description: dataObject[i].extract,
      image: dataObject[i].thumbnail ? dataObject[i].thumbnail.source : '',
      url: `https://en.wikipedia.org/?curid=${dataObject[i].pageid}`,
    };
    parsedData.push(entry);
  }

  return parsedData;
}

export { handleSearch };
