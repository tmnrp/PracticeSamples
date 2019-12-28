package com.tmnrp.moviesdb.movies.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.moviesdb.movies.model.Movies;

public interface MoviesRepository extends JpaRepository<Movies, UUID> {

}
