const router = require("express").Router();
const stt = require("../utils/stt");
const params = require("../params");
const fs = require("fs");

// Watson NLU Route for analize text
router.post("/stt", async function (req, res) {
  // res.send("hey world")
  const input = req.body.audio;
  console.log(input);
  try {
      if (!input) {
          res.send({
              status: false,
              message: "No file uploaded",
          })
      } else {
          let finalJson = [];
          await stt(params, input).then((ans) => {
            console.log("hola")
              finalJson.push(ans)
              res.send(ans)
          }
          );
      }
  } catch (err) {
      res.status(500).json({ message: "No se pudo analizar el archivo ingresado" });
  }
});

module.exports = router;
