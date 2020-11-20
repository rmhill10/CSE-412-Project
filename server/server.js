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

//Get all GPUs
app.get("/api/v1/ComputerParts/gpus", async (req, res) => {
    
    // Default variables:
    // power_lower_bound = MIN(Power)
    // power_upper_bound = MAX(Power)
    // vram_lower_bound = MIN(VRAM)
    // vram_upper_bound = MAX(VRAM)
    // memory_clock_lower_bound = MIN(Memory_Clock)
    // memory_clock_upper_bound = MAX(Memory_Clock)

    console.log(req.params.itemid);

    var query = "SELECT * FROM gpu, computer_part, sells WHERE gpu.itemid = computer_part.itemid AND computer_part.itemid = sells.itemid " +
                " AND Power > $1 AND Power < $2 AND VRAM > $3 AND VRAM < $4 AND Memory_Clock > $5 AND Memory_Clock < $6;";
    

    try
    {
        const results = await db.query(query, [req.body.power_lower_bound, req.body.power_upper_bound, 
                                                req.body.vram_lower_bound, req.body.vram_upper_bound, 
                                                req.body.memory_clock_lower_bound, req.body.memory_clock_upper_bound]);

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

//Get all CPUs
app.get("/api/v1/ComputerParts/cpu", async (req, res) => {
    
    // Default variables:
    // cores_lower_bound = MIN(Cores)
    // cores_upper_bound = MAX(Cores)
    // clock_lower_bound = MIN(Clock)
    // clock_upper_bound = MAX(Clock)

    console.log(req.params.itemid);

    var query = "SELECT * FROM cpu, computer_part, sells WHERE cpu.itemid = computer_part.itemid AND computer_part.itemid = sells.itemid " +
                "AND Cores > $1 AND Cores < $2 AND Clock > $3 AND Clock < $4";

    try
    {
        const results = await db.query(query, [req.body.cores_lower_bound, req.body.cores_upper_bound, 
                                                req.body.clock_lower_bound, req.body.clock_upper_bound]);

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

//Get all RAM
app.get("/api/v1/ComputerParts/ram", async (req, res) => {

    // Default variables:
    // clock_frequency_lower_bound = MIN(Clock_Frequency)
    // clock_frequency_upper_bound = MAX(Clock_Frequency)
    // capacity_lower_bound = MIN(Capacity)
    // capacity_upper_bound = MAX(Capacity)

    console.log(req.params.itemid);

    var query = "SELECT * FROM ram, computer_part, sells WHERE ram.itemid = computer_part.itemid AND computer_part.itemid = sells.itemid " +
                "AND Clock_Frequency > $1 AND Clock_Frequency < $2 AND Capacity > $3 AND Capacity < $4"

    try
    {
        const results = await db.query(query, [req.body.clock_frequency_lower_bound, req.body.clock_frequency_upper_bound, 
                                                req.body.capacity_lower_bound, req.body.capacity_upper_bound]);

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

// get from a certain manufacturer

// get gpus from a certain range

// get cpus from a certain range

// get ram from a certain range


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
