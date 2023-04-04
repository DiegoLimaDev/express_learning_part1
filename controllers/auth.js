export const authPost = (req, res) => {
  const { name } = req.body;
  if (name) return res.status(200).send(`<h1>Hello, ${name}</h1>`);
  res.status(401).send('Please provide a credential');
};
