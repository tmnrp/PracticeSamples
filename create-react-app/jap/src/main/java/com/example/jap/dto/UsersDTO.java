package com.example.jap.dto;

public class UsersDTO {

	private String name;
	private String productUUID;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProductUUID() {
		return productUUID;
	}

	public void setProductUUID(String productUUID) {
		this.productUUID = productUUID;
	}

	@Override
	public String toString() {
		return "UsersDTO [name=" + name + ", productUUID=" + productUUID + "]";
	}
}
