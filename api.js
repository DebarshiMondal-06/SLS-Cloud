const { api, data } = require("@serverless/cloud");



api.post('/', async (req, res) => {
  const { name, email } = req.body;
  await data.set(`user:${email}`, name);
  res.status(201).json({
    message: 'Data Created!'
  });
});



api.get('/', async (req, res) => {
  const { id } = req.query;
  if (id) {
    const getDATA = await data.get(`user:${id}`);
    return res.status(201).json({
      message: getDATA
    });
  }
  const getDATA = await data.get(`user:*`, { reverse: true });
  res.status(201).json({
    message: getDATA
  });
});


api.delete('/', async (req, res) => {
  const { id } = req.query;
  await data.remove(`user:${id}`);
  res.status(201).json({
    message: `Data Deleted! ${id}`
  });
});





