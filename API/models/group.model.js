import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const GroupSchema = mongoose.Schema({
    "_id":Number,
    "gname":{
        "type":String,
        "required":[true, "Group Name is required"],
        "lowercase":true,
        "trim":true,
        "unique":true
    }
});

//Apply uniqueValidator plugin to group schema
GroupSchema.plugin(uniqueValidator);

//compile model to schema
const GroupSchemaModel = mongoose.model('group_collection', GroupSchema);

export default GroupSchemaModel;