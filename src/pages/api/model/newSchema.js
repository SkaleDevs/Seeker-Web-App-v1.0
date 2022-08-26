import mongoose from 'mongoose';

const newSchema = new mongoose.Schema({
    // Institute Representative's detail
    MBA:{
        type:Array
    },
    Phd:{
        type:Array
    },
    Science:{
        type:Array
    },
    Management:{
        type:Array
    },
    Engineering:{
        type:Array
    },
    Medical:{
        type:Array
    },
    Arts:{
        type:Array
    },
    Commerce:{
        type:Array
    },
    Physics:{
        type:Array
    },
    Chemistry:{
        type:Array
    },
    Biology:{
        type:Array
    },
    Mathematics:{
        type:Array
    },
    English:{
        type:Array
    },
    Hindi:{
        type:Array
    },
    Marathi:{
        type:Array
    },
    Kannada:{
        type:Array
    },
    Girl:{
        type:Array
    },
    Disable:{
        type:Array
    },
    OBC:{
        type:Array
    },
    SCST:{
        type:Array
    }

});


let news= mongoose.models.news || mongoose.model('news', newSchema);

export default news;