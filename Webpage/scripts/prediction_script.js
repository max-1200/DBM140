//importing tensorflow javascript, from where though

//import * as tf from '@tensorflow/tfjs';
//this was for when you install it using npm on your local machine

const model = tf.loadLayersModel('/Webpage/models_web/trained_model_Max_20231016_1.json');
//This model contains the attention layer, this causes the model to not load, try to create a model without it
//the bin file also belongs to the specific model you convert, and will be overwritten if you don't move it. But I don't know how to change the name of the bin file, probably somewhere in the json file.

// function import_and_predict()
var user_input = document.getElementById('user_input').value; 

const prediction = model.predict(user_input);

console.log(user_input);
console.log(prediction);