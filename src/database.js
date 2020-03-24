const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
// const { ZOMBIE_SCHOOL_MONGODB_HOST, ZOMBIE_SCHOOL_MONGODB_DATABASE } = process.env;
// const MONGODB_URI = 'mongodb://${ZOMBIE_SCHOOL_MONGODB_HOST}/${ZOMBIE_SCHOOL_MONGODB_DATABASE}';

mongoose.connect(MONGODB_URI, {
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

.then(db => console.log("database conncet"))
    .catch(err => console.log(err));