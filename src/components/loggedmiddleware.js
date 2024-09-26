// Logger Middleware
const loggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} request to ${req.url}`);

  // Store the original send function
  const originalSend = res.send;

  // Override the res.send method to log the response
  res.send = function (body) {
    console.log(`[${timestamp}] Response: ${body}`);
    return originalSend.call(this, body);
  };

  next(); // Call the next middleware or route handler
};
