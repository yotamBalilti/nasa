import { atom, selector } from 'recoil';
import { Meteor } from '../types';

export const meteorsListState = atom<Meteor[]>({
  key: 'meteorsList',
  default: undefined,
});

export const yearState = atom<string>({
  key: 'year',
  default: '',
});

export const massState = atom<number>({
  key: 'mass',
  default: 1,
});

export const yearsDataListState = selector<Set<string>>({
  key: 'yearsDataList',
  get: ({ get }) => {
    const meteors = get(meteorsListState);
    const uniqueYears = new Set(
      meteors?.map((meteor) => meteor.year && meteor.year.slice(0, 4))
    );

    return uniqueYears;
  },
});

export const massDataListState = selector<Set<number>>({
  key: 'massDataList',
  get: ({ get }) => {
    const meteors = get(meteorsListState);
    const uniqueMass = new Set(meteors?.map((meteor) => Number(meteor.mass)));

    return uniqueMass;
  },
});

export const filteredMeteorsState = selector<Meteor[]>({
  key: 'yearFilteredMeteors',
  get: ({ get }) => {
    const meteors = get(meteorsListState);
    const year = get(yearState);
    const mass = get(massState);

    const filteredMeteors = meteors?.filter(
      (meteor) =>
        meteor.year?.startsWith(year) && mass && Number(meteor.mass) > mass
    );

    const sortedMeteors = filteredMeteors?.sort((a, b) => {
      return Number(a.mass) - Number(b.mass);
    });

    return sortedMeteors;
  },
});

export const nextAvailableResultState = selector<string | undefined>({
  key: 'nextAvailableResult',
  get: ({ get }) => {
    const meteors = get(meteorsListState);
    const year = get(yearState);
    const mass = get(massState);

    const nextYear = meteors
      ?.find(
        (meteor) => meteor.year > year && mass && Number(meteor.mass) > mass
      )
      ?.year.slice(0, 4);

    return nextYear;
  },
});
