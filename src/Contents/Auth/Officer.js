Officer = {
    login: function(profile, cb) {

        console.log(profile);

        if (profile.service == "google") {
            // ...

            var response = {
                lastname: "...",
                mail: profile.mail,
                uid: "1"
            };

            // callback method (err,response)
            cb(null, response);
        }

    }
};

module.exports = Officer;