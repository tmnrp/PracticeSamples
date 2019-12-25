package com.tmnrp.moviesdb.categories.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.moviesdb.categories.entity.Categories;

@Controller
@RequestMapping(value = "/categories")
public class CategoriesController {

	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/getAllCategories")
	public ArrayList<Categories> getCategories() {
		ArrayList<Categories> categoriesArr = new ArrayList<>();
		categoriesArr.add(new Categories(UUID.randomUUID(), "Action"));
		categoriesArr.add(new Categories(UUID.randomUUID(), "Comic"));
		categoriesArr.add(new Categories(UUID.randomUUID(), "Documentary"));
		categoriesArr.add(new Categories(UUID.randomUUID(), "Horror"));

		return categoriesArr;
	}
}
