package com.example.jap.model;

import java.time.LocalDate;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Products {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(columnDefinition = "BINARY(16)")
	private UUID id;

	private String name;
	private double price;

	@Column(name = "expiration_date")
	private LocalDate expirationDate;

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

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public LocalDate getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(LocalDate expirationDate) {
		this.expirationDate = expirationDate;
	}

	@Override
	public String toString() {
		return "Products [id=" + id + ", name=" + name + ", price=" + price + ", expirationDate=" + expirationDate
				+ "]";
	}

	public Products() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Products(String name, double price, LocalDate expirationDate) {
		super();
		this.name = name;
		this.price = price;
		this.expirationDate = expirationDate;
	}

}
