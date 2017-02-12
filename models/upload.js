/**
 * Created by manish on 12/2/17.
 */
var cloudinary = require('../helpers/cloudinary').cloudinary;
module.exports = {

    imageUpload: function (req, res, err) {
       console.log(req.body);
        if (req.header('X-FUTZ-SEC') == 'SorryForDelay-GetBackToYouSoon'){
            cloudinary.uploader.upload(req.files.myImage.path,function(result) {
                console.log(result)
                res.json(result);
            });
        } else {
            res.json({"status": "failure", "data": "Wrong Security Code"});
        }
    }
}