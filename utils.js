module.exports = {
  printRequestInformation: (req) => {
    console.log('req.method:', req.method);
    console.log('req.path:', req.path)
    console.log('req.params:', req.params);
    console.log('req.query:', req.query);
    // console.log('req.route:', req.route);
  }
};
