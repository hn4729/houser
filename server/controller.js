module.exports = {
  getAllHouses: async (req, res) => {
    const db = req.app.get("db");
    const results = await db.getHouses();
    res.status(200).send(results);
  },

  insert: (req, res) => {
    const {
      name,
      address,
      city,
      state,
      zipcode,
      image_url,
      monthly_mortgage,
      desired_mortgage
    } = req.body;
    const db = req.app.get("db");
    db.insertHouse(
      name,
      address,
      city,
      state,
      zipcode,
      image_url,
      monthly_mortgage,
      desired_mortgage
    ).then(() => {
      res.sendStatus(200);
    });
  },

  delete: (req, res) => {
    const { id } = req.params;
    const db = req.app.get("db");
    db.deleteHouse(id).then(() => {
      res.sendStatus(200);
    });
  }
};
