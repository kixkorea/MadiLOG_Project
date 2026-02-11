const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('MadiLog 서버가 정상적으로 작동 중입니다!');
});

app.listen(port, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
