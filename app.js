// basic required imports for NodeJS
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express instance and instantiate bodyParser and cors
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
// get JSON to format date values
app.get('/dateValues/:dateVal', function( req, res, next ){
  let dateVal = req.params.dateVal;
  let dateFormat = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  if( isNaN( dateVal )) {
    var naturalDate =
      new Date(dateVal).toLocaleDateString(
        'en-us', dateFormat
      );
    var unixDate = new Date( dateVal ).getTime() / 1000;
  }
  else {
    var unixDate = dateVal;
    var naturalDate =
      new Date( dateVal * 1000 ).toLocaleDateString(
        'en-us', dateFormat
      );
  }

  res.json({
    natural: naturalDate,
    unix: unixDate
  });
});

app.listen( 3000, function(){
  console.log('working');
});
