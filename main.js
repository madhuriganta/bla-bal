function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8Mdy0QS6H/model.json' , modelReady)
    
}

function modelReady(){
    Classifier.classify(gotResults);
}
function gotResults(error,results)
{
    console.log('Got Results!');
}

function gotResults( error , results) {
   if (error) {
       console.error(error);
   } else {
       console.log(results);
       random_number_r = Math.floor(Math.random() * 255) + 1;
       random_number_g = Math.floor(Math.random() * 255) + 1;
       random_number_b = Math.floor(Math.random() * 255) + 1;

       document.getElementById("result_label").innerHTML = 'I can hear - '+
       results[0].label;
       document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
       (results[0].confidence*100).toFixed(2)+" % ";
       document.getElementById("result_label").style.color = "rgb("
       +random_number_r+","+random_number_g+","+random_number_b+")";
       document.getElementById("result_confidence").style.color = "rgb("
       +random_number_r+","+random_number_g+","+random_number_b+")";

       img = document.getElementById('lion');
       img1 = document.getElementById('dog');
       img2 = document.getElementById('cat');
      if (results[0].label == "roar") {
            img.src = 'cat_gif_(1).gif';
            img.src = 'cat.jpg';
            img.src = 'doggie.jpg';
        }else if (results[0].label == "barking") {
            img.src = 'Lion_waiting_in_Namibia.jpg';
            img.src = 'cat.jpg';
            img.src = 'doggie_gif.gif';
        } if(results[0].label == "meow") {
            img.src = 'Lion_waiting_in_Namibia.jpg';
            img.src = 'cat_gif.gif';
            img.src = 'doggie.jpg';
        }
    }
}
