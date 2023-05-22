import summarizeMovieScript from "../util/summarize"
import extractCharacters from "../util/extract"

class MovieControllers{
    async summarizedMovie(req,res){
        try {
          const movieScript=req.body
            const summary = await summarizeMovieScript(movieScript);
            // console.log('Summary:', summary);
        
            const characters = await extractCharacters(movieScript);
            // console.log('Characters:', characters);
            return res.status(200).json({
              summary:summary,
              characters:characters
            })
          } catch (error) {
            console.error('Error:', error);
          }
    }
}

const movieController=new MovieControllers()
export default movieController