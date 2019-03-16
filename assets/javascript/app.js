// FIREBASE
// --------------------
// config Here
// --------------------

var trainData = firebase.database();

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
    
})