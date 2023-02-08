// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {

  const token = user.getJWTToken();

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + 3 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    AcccessControlAllowCredentials: true,
  };
  res.header("Access-Control-Allow-Credentials",true)
  res.status(statusCode).cookie("token", token, options).json({
   
    success: true,
    user,
    token,
  });

 
};

module.exports = sendToken;
