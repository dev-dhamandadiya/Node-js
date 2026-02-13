// controllers/adminController.js
import Movie from "../models/movies.model.js"; // Make sure your Movie model is imported

const adminController = {

    // Home page
    homePages(req, res) {
        return res.render("index");
    },

    // Add Movies page
    addMovies(req, res) {
        console.log(req.body); // Logs form submission
        return res.render("pages/addMovies");
    },

    // View Movies page
    async viewMovies(req, res) {
        try {
            const movies = await Movie.find({}); // Correct model name
            return res.render("pages/viewMovies", { movies });
        } catch (error) {
            console.log(error);
            return res.send("Something went wrong");
        }
    }

};

export default adminController;
