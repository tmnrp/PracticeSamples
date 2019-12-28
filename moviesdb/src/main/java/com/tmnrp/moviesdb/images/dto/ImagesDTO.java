package com.tmnrp.moviesdb.images.dto;

import com.tmnrp.moviesdb.utils.ImageTypes;

public class ImagesDTO {
	private ImageTypes type;
	private String src;
	private String altText;

	public ImageTypes getType() {
		return type;
	}

	public void setType(ImageTypes type) {
		this.type = type;
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}

	public String getAltText() {
		return altText;
	}

	public void setAltText(String altText) {
		this.altText = altText;
	}

}
