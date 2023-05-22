import express from 'express'
import movieController from '../controllers/movie.controllers';


const routes = express();


routes.post("/",movieController.summarizedMovie);

routes.get("*", (req, res) => {
    res.status(404).json({
      message: "Page not found, try again",
    });
});


export default routes
