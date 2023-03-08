package com.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service // marks the class as a service provider (business layer)
public class MovieService {

    @Autowired // let the framework know to instantiate the class for us (dependency injection)
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){

        return movieRepository.findAll();
    }

    public Optional<Movie> movieById(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
