import store from '@/store/';

export const onlyAdmin = (to, from, next) => {
  console.log(store);
  next();
};

export const onlyReceptionist = async (to, from, next) => {
  const userType = await store.getters['user/getUser'].type_user;
  if (userType === 2) {
    next();
  } else {
    next({
      name: 'Home',
      // query: { redirectFrom: to.fullPath },
    });
  }
};
