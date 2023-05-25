import express from 'express'
import movieController from '../controllers/movie.controllers';
import multer from "multer";

const routes = express();

const upload = multer();

routes.post("/",upload.single('pdf'),movieController.summarizedMovie);

routes.get("*", (req, res) => {
    res.status(404).json({
      message: "Page not found, try again",
    });
});


export default routes
