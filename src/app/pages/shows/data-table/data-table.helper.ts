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
