package com.example.jap.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.jap.model.Users;

public interface UsersRepo extends JpaRepository<Users, UUID> {

}
