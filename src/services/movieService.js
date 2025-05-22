import { findAllMovies, findMovieById, findAwardedMovies, findLanFilteredMovies, findOrderedMovies} from "../data/movieData.js";

export const getMovies = async (page, pageSize) => {
    return await findAllMovies(page, pageSize);
}

export const getMovieById = async (id) => {
    return await findMovieById(id);
}

export const searchAwardedMovies = async (page, pageSize) => {
    return await findAwardedMovies(page, pageSize);
}

export const searchLanFinteredMovies = async (languaje, page, pageSize) => {
    return await findLanFilteredMovies(languaje, page, pageSize);
}

export const searchOrderedMovies = async (page, pageSize) => {
    return await findOrderedMovies(page, pageSize);
}
