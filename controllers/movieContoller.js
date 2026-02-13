import Movie from "../models/movieModel.js";

const adminController = {

    homePages(req, res) {
        return res.render("index");
    },

    // SHOW FORM
    addMovies(req, res) {
        return res.render("pages/addMovies");
    },

    // SAVE MOVIE
    async saveMovie(req, res) {
        try {
            console.log(req.body);

            const { movieName, rating, description } = req.body;

            const newMovie = new Movie({
                movieName,
                rating,
                description
            });

            await newMovie.save();

            return res.redirect("/admin/view-movies");

        } catch (error) {
            console.log(error);
            return res.send("Error saving movie");
        }
    },

    async viewMovies(req, res) {
        try {
            const movies = await Movie.find({});
            return res.render("pages/viewMovies", { movies });
        } catch (error) {
            console.log(error);
            return res.send("Error loading movies");
        }
    }

};

export default adminController;
