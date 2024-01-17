const mongoose = require('mongoose')

const AnnotationDataSchema = new mongoose.Schema({
    title: {
        type: String, 
    },

    notes: {
        type: String,
    },

    priority: {
        type: Boolean,
    } 
})

module.exports = mongoose.model('Annotations', AnnotationDataSchema )

