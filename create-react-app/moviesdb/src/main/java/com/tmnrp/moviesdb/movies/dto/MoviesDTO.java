package com.tmnrp.moviesdb.movies.dto;

import java.util.List;
import java.util.UUID;

public class MoviesDTO {
	private String title;
	private String description;

	private List<UUID> images;
	private List<UUID> categories;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<UUID> getImages() {
		return images;
	}

	public void setImages(List<UUID> images) {
		this.images = images;
	}

	public List<UUID> getCategories() {
		return categories;
	}

	public void setCategories(List<UUID> categories) {
		this.categories = categories;
	}

}
