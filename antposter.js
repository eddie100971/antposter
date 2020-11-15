
function getTruth() {
    axios.get('http://127.0.0.1:5000/submission_truth')
        .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
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