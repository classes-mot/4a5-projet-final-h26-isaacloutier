import express from "express";
import demandesRoutes from "./routes/demandesRoutes.js"
import usersRoutes from "./routes/usersRoutes.js"
import cors from "cors";
import { connectDB } from "./util/bd.js";
const app = express();
const port = process.env.PORT || 5000

app.use(express.json());
app.use(cors());
await connectDB();
app.use("/api/user", usersRoutes);
app.use("/api/demandes", demandesRoutes);




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
export default app;