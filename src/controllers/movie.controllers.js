import summarizeMovieScript from "../util/summarize"
import extractCharacters from "../util/extract"
import fs from 'fs'
import PdfParse from "pdf-parse";


class MovieControllers{
    async summarizedMovie(req,res){
          try{
          let text;
          if(req.file){
            const pdfData = req.file.buffer;
            text=await PdfParse(pdfData)
          }
          text=req.body
            const summary =await summarizeMovieScript(text);
            const characters =await extractCharacters(text);
            return res.status(200).json({
              summary:summary,
              characters:characters
            })
          }catch(err){
            return res.status(500).json({
              message:err.message
            })
          }
        }
}

const movieController=new MovieControllers()
export default movieController