 const jwt=require('jsonwebtoken')
 function authenticate(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch(error) {
    res.status(401).send({ error: 'Unauthorized or Token expired' });
  }
}

   module.exports={authenticate}
  