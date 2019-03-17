//refence from another assignment 
// --------------------------------------------------------------------------------------------------
// // Initialize Firebase
// var config = {
//     apiKey: 
//     authDomain: 
//     databaseURL: 
//     projectId: 
//     storageBucket:
//     messagingSenderId:
// };
// firebase.initializeApp(config);

// //create a varible to reference the firebase
// var trainData = firebase.database();
//--------------------------------------------------------------------------------------------------

$("#addTrainBtn").on("click",function(){
    var trainTime = $("#trainTimeInput").val().trim();
    var destination = $("#destinationInput").val().trim();
    var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
    var frequency = $("#frequencyInput").val().trim();

    console.log(firstTrain);
    return false; 
})

//collecting data from firebase

trainData.ref().on("child_added", function(snapshot){
    var name= snapshot.val().name;
    var destination = snapshot.val().destintion;
    var frequency = snapshot.val().frequency;
    var firstTrain = snapshot.val().firstTrain;

    var remainder = moment().diff(moment.unix(firstTrain),"minutes")%frequency;
    var minutes = frequency - remainder;
    var arrival = moment().add(minutes, "m").format("hh:mm A")

    console.log(remainder);
    console.log(minutes);
    console.log(arrival); 

    $("#trainTable > tBody").append("<tr><td>"+name +"</td><td>"+destination 
    +"</td><td>"+frequency +"</td><td>"+arrival +"</td><td>"+minutes +"</td></tr>")
})