const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data', 'users.json');

router.get('/', (req, res) => {
  const users = fs.createReadStream(usersPath, { encoding: 'utf8' });
  users.on('error', () => {
    res.status(500).json({ message: 'Ошибка сервера' });
  });
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  users.pipe(res);
});

router.get('/:id', (req, res) => {
  fs.readFile(usersPath, { encoding: 'utf8' }, (err, data) => {
    if (err) {
      res.status(500).json({ message: 'Ошибка сервера' });
      return;
    }
    const usersData = JSON.parse(data);
    if (!usersData.find((user) => user._id === req.params.id)) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    res.send(usersData.find((user) => user._id === req.params.id));
  });
});

module.exports = router;
