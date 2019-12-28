package com.tmnrp.moviesdb.dto;

import java.util.Arrays;
import java.util.UUID;

public class Movie {

	private UUID movieId;
	private String title;
	private String description;
	private String[] categories;
	private String[] dpImages;
	private String[] carouselImages;

	public UUID getMovieId() {
		return movieId;
	}

	public void setMovieId(UUID movieId) {
		this.movieId = movieId;
	}

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

	public String[] getCategories() {
		return categories;
	}

	public void setCategories(String[] categories) {
		this.categories = categories;
	}

	public String[] getDpImages() {
		return dpImages;
	}

	public void setDpImages(String[] dpImages) {
		this.dpImages = dpImages;
	}

	public String[] getCarouselImages() {
		return carouselImages;
	}

	public void setCarouselImages(String[] carouselImages) {
		this.carouselImages = carouselImages;
	}

	@Override
	public String toString() {
		return "Movie [movieId=" + movieId + ", title=" + title + ", description=" + description + ", categories="
				+ Arrays.toString(categories) + ", dpImages=" + Arrays.toString(dpImages) + ", carouselImages="
				+ Arrays.toString(carouselImages) + "]";
	}

	public Movie() {
		super();
	}

	public Movie(UUID movieId, String title, String description, String[] categories, String[] dpImages,
			String[] carouselImages) {
		super();
		this.movieId = movieId;
		this.title = title;
		this.description = description;
		this.categories = categories;
		this.dpImages = dpImages;
		this.carouselImages = carouselImages;
	}

}
