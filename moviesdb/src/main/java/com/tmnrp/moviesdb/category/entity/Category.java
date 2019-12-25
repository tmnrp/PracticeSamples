package com.tmnrp.moviesdb.category.entity;

import java.util.UUID;

public class Category {
	private UUID id;
	private String name;

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "Category [id=" + id + ", name=" + name + "]";
	}

	public Category() {
	}

	public Category(UUID id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

}
