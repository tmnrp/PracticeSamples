package com.tmnrp.moviesdb.category.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.moviesdb.category.entity.Category;

@Controller
@RequestMapping(value = "/category")
public class CategoryController {

	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/getCategories")
	public ArrayList<Category> getCategories() {
		ArrayList<Category> categoriesArr = new ArrayList<>();
		categoriesArr.add(new Category(UUID.randomUUID(), "Action"));
		categoriesArr.add(new Category(UUID.randomUUID(), "Comic"));
		categoriesArr.add(new Category(UUID.randomUUID(), "Documentary"));
		categoriesArr.add(new Category(UUID.randomUUID(), "Horror"));

		return categoriesArr;
	}
}
