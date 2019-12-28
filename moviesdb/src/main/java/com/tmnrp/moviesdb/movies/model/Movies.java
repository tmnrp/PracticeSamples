package com.tmnrp.moviesdb.movies.model;

import java.util.List;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.tmnrp.moviesdb.categories.model.Categories;
import com.tmnrp.moviesdb.images.model.Images;

@Entity
public class Movies {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(columnDefinition = "BINARY(16)")
	private UUID id;

	private String title;
	private String description;

	@ManyToMany
	@JoinTable(name = "movies_categories", joinColumns = @JoinColumn(name = "movies_id_fk"), inverseJoinColumns = @JoinColumn(name = "categories_id_fk"))
	private List<Categories> categories;

	@ManyToMany
	@JoinTable(name = "movies_images", joinColumns = @JoinColumn(name = "movies_id_fk"), inverseJoinColumns = @JoinColumn(name = "images_id_fk"))
	private List<Images> images;

	public Movies() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Movies(String title, String description, List<Categories> categories, List<Images> images) {
		super();
		this.title = title;
		this.description = description;
		this.categories = categories;
		this.images = images;
	}

	@Override
	public String toString() {
		return "Movies [id=" + id + ", title=" + title + ", description=" + description + ", categories=" + categories
				+ ", images=" + images + "]";
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
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

	public List<Categories> getCategories() {
		return categories;
	}

	public void setCategories(List<Categories> categories) {
		this.categories = categories;
	}

	public List<Images> getImages() {
		return images;
	}

	public void setImages(List<Images> images) {
		this.images = images;
	}

}
