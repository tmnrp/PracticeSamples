package com.tmnrp.moviesdb.images.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.tmnrp.moviesdb.utils.ImageTypes;

@Entity
public class Images {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(columnDefinition = "BINARY(16)")
	private UUID id;

	@Enumerated
	private ImageTypes type;

	private String src;
	private String altText;

	public Images() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Images(ImageTypes type, String src, String altText) {
		super();
		this.type = type;
		this.src = src;
		this.altText = altText;
	}

	@Override
	public String toString() {
		return "Images [id=" + id + ", type=" + type + ", src=" + src + ", altText=" + altText + "]";
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

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
