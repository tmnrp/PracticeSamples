package com.tmnrp.moviesdb.entity;

import java.util.List;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Movies {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;

	private String title;
	private String description;

	@ManyToMany
	@JoinTable(name = "movies_images", joinColumns = @JoinColumn(name = "movies_id"), inverseJoinColumns = @JoinColumn(name = "images_id"))
	private List<Images> images;

	@ManyToMany
	@JoinTable(name = "movies_categories", joinColumns = @JoinColumn(name = "movies_id"), inverseJoinColumns = @JoinColumn(name = "categories_id"))
	private List<Categories> categories;

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

	public List<Images> getImages() {
		return images;
	}

	public void setImages(List<Images> images) {
		this.images = images;
	}

	public List<Categories> getCategories() {
		return categories;
	}

	public void setCategories(List<Categories> categories) {
		this.categories = categories;
	}

	@Override
	public String toString() {
		return "Movies [id=" + id + ", title=" + title + ", description=" + description + ", images=" + images
				+ ", categories=" + categories + "]";
	}

	public Movies() {
		super();
	}

	public Movies(UUID id, String title, String description, List<Images> images, List<Categories> categories) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.images = images;
		this.categories = categories;
	}

}
