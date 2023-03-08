package com.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // let the program know this is a repository
public interface MovieRepository extends MongoRepository<Movie, ObjectId> { // what type of data, what type of id
    Optional<Movie> findMovieByImdbId(String imdbId);
}
