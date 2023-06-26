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

export const yearFilteredMeteorsState = selector<Meteor[]>({
  key: 'yearFilteredMeteors',
  get: ({ get }) => {
    const meteors = get(meteorsListState);
    const year = get(yearState);
    const mass = get(massState);

    return meteors?.filter(
      (meteor) =>
        meteor.year?.startsWith(year) && mass && Number(meteor.mass) > mass
    );
  },
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
