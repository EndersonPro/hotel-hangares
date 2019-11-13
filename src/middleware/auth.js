import store from '@/store/';

export const onlyAdmin = (to, from, next) => {
  console.log(store);
  next();
};

export const onlyReceptionist = (to, from, next) => {};
