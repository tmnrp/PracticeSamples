package com.tmnrp.moviesdb.entity;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.tmnrp.moviesdb.MoviesdbUtils;
import com.tmnrp.moviesdb.MoviesdbUtils.Type;

@Entity
public class Images {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private UUID id;

	@Enumerated(EnumType.STRING)
	private MoviesdbUtils.Type type;

	private String src;
	private String altText;

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public MoviesdbUtils.Type getType() {
		return type;
	}

	public void setType(MoviesdbUtils.Type type) {
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

	@Override
	public String toString() {
		return "Images [id=" + id + ", type=" + type + ", src=" + src + ", altText=" + altText + "]";
	}

	public Images() {
		super();
	}

	public Images(UUID id, Type type, String src, String altText) {
		super();
		this.id = id;
		this.type = type;
		this.src = src;
		this.altText = altText;
	}

}
