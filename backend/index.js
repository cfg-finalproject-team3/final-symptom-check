const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();



const TestModel = require("./models/Testresult");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://cfg3:cfg12345@cluster0.ryuittd.mongodb.net/test?retryWrites=true&w=majority",
     {
    useNewUrlParser: true,
     }
);


app.post("/insert", async (req, res) => {

    const testRes = req.body.testRes
    const testVal = req.body.testVal

    const searchtest = new TestModel(({ date: new Date(), testres: testRes, testvalue: testVal }));

    try {
        await searchtest.save();
        res.send("inserted data");
    }   catch (err) {
        console.log(err);
    }

});


app.get("/read", async (req, res) => {
    TestModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    });
});


app.delete("/delete:id", async (req, res) => {
    const id = req.params.id;

    await TestModel.findByIdAndRemove(id).exec();
    res.send("deleted data");
});


app.listen(3001, () =>{
    console.log("Server listening on port 3001...");
});

