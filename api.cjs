const express = require('express');
const app = express();
const cors = require("cors");
const taskRoutes = require("./src/routes/routes.cjs");

// Aplicar el middleware CORS con la configuración adecuada
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(taskRoutes);

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});
