
var truths = 7;
var truth_list = ["UCI has the best CS students.", "UCI's mascot is Peter the Anteater.", "The I in UCI stands for Irvine.",
                  "The newest dining common is Brandywine.", "The two main on-campus dorms are Middle Earth and Mesa Court.",
                  "You are not allowed to skateboard on Ring Road.", "Petr drops are awesome!"];

var lie_list = ["UCI is the number 1 public school.", "UCI is located in NorCal.", "UCI's Ring Road often sells $1 boba.",
                "The AntHill is the UCI bookstore.", "UCI has no Computer Science major.", "The original Petr dropper is still attending UCI.",
                "The most popular club in UCI is UCI Dragonboat.", "I am petr."]

function getRandTruth1() {
  var random_truth = Math.floor((Math.random() * truths) + 1);
  var new_truth = truth_list[random_truth];
  document.getElementById("true_1").value = new_truth;
}

document.getElementById("true_2").onclick = function() {
  this.textContent = "Lol xd";
}


function postTruth() {
    var truth = document.getElementById("truthinput").value;
    console.log(truth);
    axios.post('http://127.0.0.1:5000/submission_truth', {
        truth_sub: truth
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}




//function getTruth() {
//    axios.get('http://127.0.0.1:5000/submission_truth')
//        .then(function (response) {
//       console.log(response);
//    })
//    .catch(function (error) {
//        console.log(error);
//    });
//}
