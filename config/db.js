// import
const { connect } = require('mongoose')

// exporting conecction
module.exports = {
    connect_to_mongo: async () => {
        try {
            await connect('mongodb+srv://or:1234@cluster0.bwhjj.mongodb.net/mystore?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            })
            console.log("connectet to mongo")
        } catch (err) {
            console.log("errore: ", err)
        }
    }
}