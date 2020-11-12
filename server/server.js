require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require('./db');

const morgan = require("morgan");

const app = express();

app.use(cors())

app.use(express.json())

// Get all Computer Parts
app.get("/api/v1/ComputerParts", async (req, res) => {
    try
    {
        const results = await db.query("SELECT * FROM computer_part INNER JOIN sells ON computer_part.itemid = sells.itemid");
        // console.log(results);
         res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                computerPart: results.rows
            }
         });
    }
    catch (err)
    {
        console.log(err);
    }

});

// Get a Computer Part
app.get("/api/v1/ComputerParts/:itemid", async (req, res) => {
    console.log(req.params.itemid);

    try
    {
        const results = await db.query("SELECT * FROM computer_part WHERE itemid = $1", [req.params.itemid]);

        res.status(200).json({
            status: "success",
            data: {
                computerPart: results.rows[0]
            }
        });
    }
    catch(err)
    {
        console.log(err);
    }

});

//Get GPUs
app.get("/api/v1/ComputerParts/:itemid", async (req, res) => {
    console.log(req.params.itemid);

    try
    {
        const results = await db.query("SELECT * FROM gpu, computer_part, sells ON gpu.itemid = computer_part.itemid AND computer_part.itemid = sells.itemid");

        res.status(200).json({
            status: "success",
            data: {
                computerPart: results.rows
            }
        });
    }
    catch(err)
    {
        console.log(err);
    }

});

//Get CPUs
app.get("/api/v1/ComputerParts/:itemid", async (req, res) => {
    console.log(req.params.itemid);

    try
    {
        const results = await db.query("SELECT * FROM cpu, computer_part, sells ON cpu.itemid = computer_part.itemid AND computer_part.itemid = sells.itemid");

        res.status(200).json({
            status: "success",
            data: {
                computerPart: results.rows
            }
        });
    }
    catch(err)
    {
        console.log(err);
    }

});

//Get RAM
app.get("/api/v1/ComputerParts/:itemid", async (req, res) => {
    console.log(req.params.itemid);

    try
    {
        const results = await db.query("SELECT * FROM ram, computer_part, sells ON ram.itemid = computer_part.itemid AND computer_part.itemid = sells.itemid");

        res.status(200).json({
            status: "success",
            data: {
                computerPart: results.rows
            }
        });
    }
    catch(err)
    {
        console.log(err);
    }

});

// Create a Computer Part
app.post("/api/v1/ComputerParts", (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: "success",
        data: {
            computerPart: "item1"
        }
    })
});

// Update a Computer Part
app.put("/api/v1/ComputerParts/:itemid", (req, res) =>{
    console.log(req.params.itemid);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            computerPart: "item1"
        }
    })
});

// Delete Resturant

app.delete("/api/v1/ComputerParts/:itemid", (req, res) => {
    res.status(202).json({
        status: "success"
    })
})

console.log("test");

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});
