//importing tensorflow javascript, from where though

//import * as tf from '@tensorflow/tfjs';
//this was for when you install it using npm on your local machine


//This model contains the attention layer, this causes the model to not load, try to create a model without it
//the bin file also belongs to the specific model you convert, and will be overwritten if you don't move it. But I don't know how to change the name of the bin file, probably somewhere in the json file.

async function import_and_predict(){

    const model = await tf.loadLayersModel('/Webpage/models_web/trained_model_Max_20231016_1.json');

    var user_input = document.getElementById('user_input').value;
    
    console.log(user_input);

    const prediction = model.predict(user_input);
    //you cannot insert the user input directly, first it has to be treated the same way as in python
    //Uncaught (in promise) Error: Error when checking model : the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see 1 Tensor(s), but instead got 7 Tensors(s).

    console.log(prediction)
}



