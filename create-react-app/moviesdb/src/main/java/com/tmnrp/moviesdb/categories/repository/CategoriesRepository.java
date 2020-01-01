package com.tmnrp.moviesdb.categories.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tmnrp.moviesdb.categories.model.Categories;

public interface CategoriesRepository extends JpaRepository<Categories, UUID> {

}
