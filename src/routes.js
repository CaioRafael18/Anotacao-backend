const express = require("express")
const routes = express.Router();

const AnnotationController = require("../controllers/AnnotationController");
const PriorityController = require("../controllers/PriorityController")
const ContentController = require("../controllers/ContentController")

// Rota Annotations
// lista toda
routes.get("/annotations", AnnotationController.read)
// criando anotação
routes.post("/annotations", AnnotationController.create);
// removendo anotação
routes.delete("/annotations/:id", AnnotationController.delete);

// Rota Priority
routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update)

// Rota content
routes.post("/contents/:id", ContentController.update)

module.exports = routes;