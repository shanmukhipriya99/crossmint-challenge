const express = require("express");
const axios = require("axios");

app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

function main() {
  for (let i = 2, j = 2; i < 6, j < 6; i++, j++) {
    if (i != 5) {
      makeReq(i, j);
      console.log(i, j);
      makeReq(i, 10 - j);
      console.log(i, 10 - j);
      makeReq(10 - i, j);
      console.log(10 - i, j);
      makeReq(10 - i, 10 - j);
      console.log(10 - i, 10 - j);
    } else {
        makeReq(i, j);
    }
  }
}

function makeReq(row, col) {
  let params = {
    candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
    row: row,
    column: col,
  };
  axios
    .post("https://challenge.crossmint.io/api/polyanets", params)
    .then((resp) => {
      console.log(resp.data);
    });
}

function deleteReq() {
  let params1 = {
    candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
    row: 1,
    column: 1,
  };
  axios.delete("https://challenge.crossmint.io/api/polyanets", params1).then(
    (resp) => {
      console.log(resp);
    },
    (err) => {
      console.log(err);
    }
  );
}

main();
// deleteReq()
app.listen(port, () => console.log("Listening on port " + port));
