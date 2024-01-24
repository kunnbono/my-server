export const routeWrapper = fn => async (req, res, next) => {
    try {
        res.json(await fn(req, res));
    } catch (e) {
        next(e);
    }
};