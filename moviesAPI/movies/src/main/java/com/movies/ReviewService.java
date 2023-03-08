package com.movies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    // MongoTemplate implements a set of ready-to-use APIs
    // Offers finer control than MongoRepository
    // Used for complex queries without using the repository
    @Autowired
    private MongoTemplate mongoTemplate;
    public Review createReview(String reviewBody, String imdbID) {
        // when you call insert, it returns the data you just pushed into the database
        Review review = reviewRepository.insert(new Review(reviewBody));

        // First, we say what we are trying to update, in this case it is the movie class
        // Next, we verify that the imdbId from the database matches the one we received from the user
        // If true, we apply the changes by Using the Update() method to push into the array of reviewIds
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbID))
                .apply(new Update().push("reviewIds").value(review))
                .first();

        return review;
    }
}
