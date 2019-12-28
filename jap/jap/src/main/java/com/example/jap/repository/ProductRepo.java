package com.example.jap.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jap.model.Products;

public interface ProductRepo extends JpaRepository<Products, UUID>{

}
