import {FiltersData} from '../../../../common.interfaces';
import {Show} from '../../../show';

export function filterByYear(data: FiltersData, show: Show) {
  if (data.year) {
    if (!show.premiereDate.includes(data.year)) {
      return false;
    }
  }
  return true;
}

export function filterByGenre(data: FiltersData, show: Show) {
  if (data.genre) {
    if (!show.genres.includes(data.genre)) {
      return false;
    }
  }

  return true;
}

export function filterBySearch(data: FiltersData, show: Show) {
  if (data.inputValue) {
    if (
      !show.name.toLowerCase().includes(data.inputValue.toLowerCase()) &&
      !show.network.toLowerCase().includes(data.inputValue.toLowerCase())
    ) {
      return false;
    }
  }

  return true;
}
