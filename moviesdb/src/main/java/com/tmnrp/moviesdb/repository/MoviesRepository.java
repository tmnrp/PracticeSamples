package com.tmnrp.moviesdb.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.moviesdb.entity.Movies;

public interface MoviesRepository extends JpaRepository<Movies, UUID> {

}
