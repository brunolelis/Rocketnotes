const { Router } = require("express")
const notesRoutes = Router()

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const NotesController = require("../controllers/NotesController")
const notesController = new NotesController()

notesRoutes.use(ensureAuthenticated)

notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes