let USERS = [
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 2",
  },
  {
    id: 3,
    name: "User 3",
  },
];

class UserController {
  getAll = (req, res) => {
    return res.json(USERS);
  };

  getById = (req, res) => {
    const user = USERS.find((x) => x.id == req.params.id);
    return user ? res.json(user) : res.status(400).json({ error: "Not found" });
  };

  deleteById = (req, res) => {
    const user = USERS.find((x) => x.id == req.params.id);
    if (user) USERS = USERS.filter((x) => x.id != req.params.id);
    return res.json(USERS);
  };

  update = (req, res) => {
    const id = USERS.findIndex((x) => x.id == req.body?.id);
    if (id >= 0) {
      USERS[id] = req.body;
    }
    return res.json(USERS);
  };
}

export const userController = new UserController();
