package com.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies") // identifies as a document object, within the specified collection
@Data // instead of writing getters/setters and toString methods, use @Data
@AllArgsConstructor // generates a constructor that takes all the args inside it
@NoArgsConstructor // generates a constructor that takes no args
public class Movie {
    @Id // specifies the primary key
    private ObjectId id; // ObjectID is similar to "unique" in mySql
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String poster;
    private List<String> genres;
    private List<String> backdrops;
    @DocumentReference // ask the database to store only the ids, and the ids can be found in a separate collection
    private List<Review> reviewIds;
}
