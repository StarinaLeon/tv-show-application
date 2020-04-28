import {ShowInterface} from '../../../shared/interfaces/show.interface';

export function filterByYear(year: string, show: ShowInterface) {
  if (year) {
    if (!show.premiereDate.includes(year)) {
      return false;
    }
  }
  return true;
}

export function filterByGenre(genre: string, show: ShowInterface) {
  if (genre) {
    if (!show.genres.includes(genre)) {
      return false;
    }
  }
  return true;
}

export function filterBySearch(query: string, show: ShowInterface) {
  if (query) {
    if (
      !show.name.toLowerCase().includes(query.toLowerCase()) &&
      !show.network.toLowerCase().includes(query.toLowerCase())
    ) {
      return false;
    }
  }

  return true;
}

export function sortByName(a: ShowInterface, b:ShowInterface ) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA > nameB) {
    return 1;
  }
  if (nameA < nameB) {
    return -1;
  }
  return 0;
}

function convertDate(show: ShowInterface) {
  const date = show.premiereDate;
  const year = date.slice(-4);
  const month = date.slice(3, 5);
  const day = date.substr(0, 2);
  const convertedDate = [year, month, day].join('');
  return convertedDate;
}

export function sortByDate(a: ShowInterface, b: ShowInterface) {
  if (convertDate(a) > convertDate(b)) {
    return 1;
  }
  if (convertDate(a) < convertDate(b)) {
    return -1;
  }
  return 0;
}
