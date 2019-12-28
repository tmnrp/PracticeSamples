package com.tmnrp.moviesdb.images.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.moviesdb.images.model.Images;

public interface ImagesRepository extends JpaRepository<Images, UUID> {

}
