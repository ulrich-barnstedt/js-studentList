const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/student-db?readPreference=primary&ssl=false',
    {useNewUrlParser: true, useUnifiedTopology: true}
);
