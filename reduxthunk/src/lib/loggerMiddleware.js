const loggerMiddleware = store => next => action => {
    console.group(action && action.type);
    console.log('before: ', store.getState());
    console.log('action', action);
    next(action);
    console.log('next: ', store.getState());
    console.groupEnd();
};

export default loggerMiddleware;