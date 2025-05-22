import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";

export async function findAllMovies(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find()
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return movies;
    } else {
        // Sin paginación: trae todas las películas
        const movies = await db.collection("movies").find().toArray();
        return movies;
    }
}

export async function findMovieById(id) {
    const db = getDb();
    const movie = await db.collection("movies").findOne({ _id: new ObjectId(id) });
    //busco por title:
    //const movie = await db.collection("movies").findOne({ title: id });
    return movie;
}

export async function findAwardedMovies(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find({ "awards.wins": { $gte: 1 } })
            .project({ title: 1, fullplot: 1, poster: 1,awards:1,  _id: 0 })
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return movies;
    } else {
        // Sin paginación: trae todas las películas
        const movies = await db.collection("movies").find({ "awards.wins": { $gte: 1 } }).project({ title: 1, fullplot: 1, poster: 1,awards:1,  _id: 0 }).toArray();
        return movies;
    }
}

export async function findLanFilteredMovies(languaje, page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find({ languages: languaje })
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return movies;
    } else {
        // Sin paginación: trae todas las películas
        const movies = await db.collection("movies").find({ languages: languaje }).toArray();
        return movies;
    }
}

export async function findOrderedMovies(page, pageSize) {
    const db = getDb();
    if (page && pageSize) {
        const skip = (page - 1) * pageSize;
        const movies = await db.collection("movies")
            .find()
            .sort({ "tomatoes.fresh": -1 })
            .skip(skip)
            .limit(pageSize)
            .toArray();
        return movies;
    } else {
        // Sin paginación: trae todas las películas
        const movies = await db.collection("movies").find().sort({ "tomatoes.fresh": -1 }).toArray();
        return movies;
    }
}
