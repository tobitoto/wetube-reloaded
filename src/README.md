# Wetube Reloaded

// 누군가가 root page로 get request 보내면,
// get은 브라우저가 서버에게 가져다달라고 하는것 = request
// req, res는 express로부터 받은 것
const handleHome = (req, res) => {
console.log("I'm in handleHome!");
return res.end();
};

// app.use : global middleware(어느 url에도 작동하는 middleware)를 만들 수 있게 해줌
