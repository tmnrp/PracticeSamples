package com.tmnrp.moviesdb.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.moviesdb.entity.Images;

public interface ImagesRepository extends JpaRepository<Images, UUID> {

}
