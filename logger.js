export const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const timer = new Date();
  console.log(
    `${method} ${url} ${timer.toLocaleDateString()} ${timer.toLocaleTimeString()}`,
  );
  next();
};
