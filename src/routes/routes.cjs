const { Router, response } = require("express");
const pool = require("./db.cjs");
const router = Router();


router.get("/zapatos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM zapatos");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching zapatos" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

router.get("/userType/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("SELECT tipo FROM users where id_user = $1", [id]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
});

router.post("/register-zapato", async (req, res) => {
  try {
    const { nombre, marca, cantidad } = req.body;

     // Verifica que se hayan proporcionado tanto la descripción como el estado
    if (!nombre || !marca || !cantidad) {
      return res
        .status(400)
        .json({ error: "Both description and status are required" });
    }

    const result = await pool.query(
      "INSERT INTO zapatos ( nombre, marca, cantidad) VALUES ($1, $2,  $3) RETURNING *",
      [nombre, marca, cantidad]
    );

    res.status(201).json(result.rows)
   
  } catch (error) {
    console.error(error.message)
  }
});

router.post("/register", async (req, res) => {
  try {
    const { nombre, marca, cantidad } = req.body;

     // Verifica que se hayan proporcionado tanto la descripción como el estado
    if (!nombre || !marca || !cantidad) {
      return res
        .status(400)
        .json({ error: "Both description and status are required" });
    }

    const result = await pool.query(
      "INSERT INTO zapatos ( nombre, marca, cantidad) VALUES ($1, $2,  $3) RETURNING *",
      [nombre, marca, cantidad]
    );

    res.status(201).json(result.rows)
   
  } catch (error) {
    console.error(error.message)
  }
});


/*
router.get("/", async (req, res) => {
  const {cedula} = req.body;
  const result = await pool.query("SELECT * FROM empleado WHERE cedula = $1", [cedula]);
  console.log(result.rows)
  res.json(result.rows);
});
router.get("/", async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("SELECT * FROM empleado WHERE id_zapato = $1", [id]);
  console.log(result);
  res.json(result.rows);
});
*/

/*
router.post("/pieza", async (req, res) => {
  try {
    const {id_zapato, nombre, marca, cedula } = req.body;

     // Verifica que se hayan proporcionado tanto la descripción como el estado
    if (!nombre || !marca || !cedula || !id_zapato) {
      return res
        .status(400)
        .json({ error: "Both description and status are required" });
    }

    const result = await pool.query(
      "INSERT INTO empleado (id_zapato, nombre, marca, cedula) VALUES ($1, $2,  $3, $4) RETURNING *",
      [id_zapato,nombre, marca, cedula]
    );

    res.status(201).json(result.rows)
   
  } catch (error) {
    console.error(error.message)
  }
});
router.post("/vajilla", async (req, res) => {
    try {
      const {id_zapato, nombre, marca, cedula } = req.body;
  
      res.status(201).json(result.rows)
     
    } catch (error) {
      console.error(error.message)
    }
  });

/*
router.put("/empleado/10", (req, res) => {
  res.send("Esto da el put");
});

router.delete("/empleado/:id", async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("DELETE FROM empleado WHERE id_zapato = $1", [id]);
  res.json(result.rows);
});

*/
module.exports = router;
