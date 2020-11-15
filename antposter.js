
function getTruth() {
    axios.get('http://127.0.0.1:5000/submission_truth')
        .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}