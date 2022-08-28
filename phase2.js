const express = require("express");
const axios = require("axios");

app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

function main() {
  let resultArr = [];
  axios
    .get(
      "https://challenge.crossmint.io/api/map/85a79482-2e64-4e8f-8f7c-3963f691e73e/goal"
    )
    .then((resp) => {
      resultArr.push(...resp.data.goal);
      for (let i = 0; i < resultArr.length; i++) {
        for (let j = 0; j < resultArr[0].length; j++) {
          makeReq(i, j, resultArr[i][j]);
          // delReq(i, j, resultArr[i][j]);
        }
      }
    })
    .catch((err) => {
      console.log("Initial Array", err);
    });
}
async function makeReq(row, col, data) {
  if (data === "POLYANET") {
    await axios
      .post("https://challenge.crossmint.io/api/polyanets", {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
    })
      .then((resp) => {
        console.log("Done:", c1, d1);
      })
      .catch((err) => {
        console.log("Polyanet", err.response.status, e1);
      });
  } 
  else 
  if (data === "RIGHT_COMETH") {
    params = {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
      direction: "right",
    };
    axios
      .post("https://challenge.crossmint.io/api/comeths", params)
      .then((resp) => {
        //   console.log(resp.data);
      })
      .catch((err) => {
        console.log("RIGHT_COMETH", err.response.status);
      });
  } 
  else 
  if (data === "LEFT_COMETH") {
    params = {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
      direction: "left",
    };
    axios
      .post("https://challenge.crossmint.io/api/comeths", params)
      .then((resp) => {
        //   console.log(resp.data);
      })
      .catch((err) => {
        console.log("LEFT_COMETH", err.response.status);
      });
  } 
  else 
  if (data === "UP_COMETH") {
    params = {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
      direction: "up",
    };
    axios
      .post("https://challenge.crossmint.io/api/comeths", params)
      .then((resp) => {
        //   console.log(resp.data);
      })
      .catch((err) => {
        console.log("UP_COMETH", err.response.status);
      });
  } 
  else 
  if (data === "DOWN_COMETH") {
    params = {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
      direction: "down",
    };
    axios
      .post("https://challenge.crossmint.io/api/comeths", params)
      .then((resp) => {
        //   console.log(resp.data);
      })
      .catch((err) => {
        console.log("DOWN_COMETH", err.response.status);
      });
  } 
  else 
  if (data === "WHITE_SOLOON") {
    params = {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
      color: "white",
    };
    axios
      .post("https://challenge.crossmint.io/api/soloons", params)
      .then((resp) => {
        //   console.log(resp.data);
      })
      .catch((err) => {
        console.log("WHITE_SOLOON", err.response.status);
      });
  } 
  else 
  if (data === "RED_SOLOON") {
    params = {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
      color: "red",
    };
    axios
      .post("https://challenge.crossmint.io/api/soloons", params)
      .then((resp) => {
        //   console.log(resp.data);
      })
      .catch((err) => {
        console.log("RED_SOLOON", err.response.status);
      });
  } 
  else 
  if (data === "BLUE_SOLOON") {
    params = {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
      color: "blue",
    };
    axios
      .post("https://challenge.crossmint.io/api/soloons", params)
      .then((resp) => {
        //   console.log(resp.data);
      })
      .catch((err) => {
        console.log("BLUE_SOLOON", err.response.status);
      });
  } 
  else 
  if (data === "PURPLE_SOLOON") {
    params = {
      candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
      row: row,
      column: col,
      color: "purple",
    };
    axios
      .post("https://challenge.crossmint.io/api/soloons", params)
      .then((resp) => {
        //   console.log(resp.data);
      })
      .catch((err) => {
        console.log("PURPLE_SOLOON", err.response.status);
      });
  }
}

function delReq(row, col, data) {
  if (data === "POLYANET") {
    axios.delete("https://challenge.crossmint.io/api/polyanets", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  } else if (data === "RIGHT_COMETH") {
    axios.delete("https://challenge.crossmint.io/api/comeths", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  } else if (data === "LEFT_COMETH") {
    axios.delete("https://challenge.crossmint.io/api/comeths", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  } else if (data === "UP_COMETH") {
    axios.delete("https://challenge.crossmint.io/api/comeths", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  } else if (data === "DOWN_COMETH") {
    axios.delete("https://challenge.crossmint.io/api/comeths", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  } else if (data === "WHITE_SOLOON") {
    axios.delete("https://challenge.crossmint.io/api/soloons", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  } else if (data === "RED_SOLOON") {
    axios.delete("https://challenge.crossmint.io/api/soloons", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  } else if (data === "BLUE_SOLOON") {
    axios.delete("https://challenge.crossmint.io/api/soloons", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  } else if (data === "PURPLE_SOLOON") {
    axios.delete("https://challenge.crossmint.io/api/soloons", {
      data: {
        candidateId: "85a79482-2e64-4e8f-8f7c-3963f691e73e",
        row: row,
        column: col,
      },
    });
  }
}



main();
app.listen(port, () => console.log("Listening on port " + port));
