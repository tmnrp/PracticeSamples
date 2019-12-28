package com.example.jap.model;

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

@Entity
public class Users {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", columnDefinition = "BINARY(16)")
	private UUID id;

	private String name;

	@ManyToMany
	@JoinTable(name = "users_products", joinColumns = @JoinColumn(name = "users_id_fk"), inverseJoinColumns = @JoinColumn(name = "products_id_fk"))
	List<Products> products;

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(String name, List<Products> products) {
		super();
		this.name = name;
		this.products = products;
	}

	@Override
	public String toString() {
		return "Users [id=" + id + ", name=" + name + ", products=" + products + "]";
	}

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

	public List<Products> getProducts() {
		return products;
	}

	public void setProducts(List<Products> products) {
		this.products = products;
	}

}
