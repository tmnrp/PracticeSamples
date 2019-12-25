package com.tmnrp.moviesdb.entity;

import java.util.UUID;

public class Movies {
	private UUID id;
	private String imgTitle;
	private String imgSrc;
	private String imgCarousel;
	private String imgAltText;
	private String imgDescription;

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getImgTitle() {
		return imgTitle;
	}

	public void setImgTitle(String imgTitle) {
		this.imgTitle = imgTitle;
	}

	public String getImgSrc() {
		return imgSrc;
	}

	public void setImgSrc(String imgSrc) {
		this.imgSrc = imgSrc;
	}

	public String getImgCarousel() {
		return imgCarousel;
	}

	public void setImgCarousel(String imgCarousel) {
		this.imgCarousel = imgCarousel;
	}

	public String getImgAltText() {
		return imgAltText;
	}

	public void setImgAltText(String imgAltText) {
		this.imgAltText = imgAltText;
	}

	public String getImgDescription() {
		return imgDescription;
	}

	public void setImgDescription(String imgDescription) {
		this.imgDescription = imgDescription;
	}

	@Override
	public String toString() {
		return "Movies [id=" + id + ", imgTitle=" + imgTitle + ", imgSrc=" + imgSrc + ", imgCarousel=" + imgCarousel
				+ ", imgAltText=" + imgAltText + ", imgDescription=" + imgDescription + "]";
	}

	public Movies(UUID id, String imgTitle, String imgSrc, String imgCarousel, String imgAltText,
			String imgDescription) {
		super();
		this.id = id;
		this.imgTitle = imgTitle;
		this.imgSrc = imgSrc;
		this.imgCarousel = imgCarousel;
		this.imgAltText = imgAltText;
		this.imgDescription = imgDescription;
	}

	public Movies() {
		super();
	}

}
