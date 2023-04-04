export const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'diego') {
    req.user = { name: 'diego', id: 5 };
    next();
  } else {
    res.status(401).send('Forbidden path');
  }
};
