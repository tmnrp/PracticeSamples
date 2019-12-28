package com.tmnrp.moviesdb.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.moviesdb.categories.dto.CategoryDTO;
import com.tmnrp.moviesdb.categories.model.Categories;
import com.tmnrp.moviesdb.categories.repository.CategoriesRepository;
import com.tmnrp.moviesdb.images.dto.ImagesDTO;
import com.tmnrp.moviesdb.images.model.Images;
import com.tmnrp.moviesdb.images.repository.ImagesRepository;
import com.tmnrp.moviesdb.movies.dto.MoviesDTO;
import com.tmnrp.moviesdb.movies.model.Movies;
import com.tmnrp.moviesdb.movies.repository.MoviesRepository;

@Controller
@RequestMapping(value = "/moviesdb")
public class MoviesDBController {

	@Autowired
	private MoviesRepository moviesRepo;

	@Autowired
	private CategoriesRepository categoriesRepo;

	@Autowired
	private ImagesRepository imagesRepo;

	// Categories
	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/getAllCategories", method = RequestMethod.GET)
	public List<Categories> getAllCategory() {
		return categoriesRepo.findAll();
	}

	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/saveCategory", method = RequestMethod.POST)
	public String saveCategory(@RequestBody CategoryDTO categoryDTO) {
		Categories category = new Categories(categoryDTO.getName());
		categoriesRepo.save(category);
		return category.toString();
	}

	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/saveCategories", method = RequestMethod.POST)
	public List<Categories> saveCategories(@RequestBody List<CategoryDTO> categoreis) {
		for (CategoryDTO category : categoreis) {
			categoriesRepo.save(new Categories(category.getName()));
		}

		return categoriesRepo.findAll();
	}

	// Images
	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/getAllImages", method = RequestMethod.GET)
	public List<Images> getAllImages() {
		return imagesRepo.findAll();
	}

	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/saveImage", method = RequestMethod.POST)
	public String saveImage(@RequestBody ImagesDTO imagesDTO) {
		Images image = new Images(imagesDTO.getType(), imagesDTO.getSrc(), imagesDTO.getAltText());
		imagesRepo.save(image);
		return image.toString();
	}

	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/saveImages", method = RequestMethod.POST)
	public List<Images> saveImages(@RequestBody List<ImagesDTO> images) {
		for (ImagesDTO image : images) {
			imagesRepo.save(new Images(image.getType(), image.getSrc(), image.getAltText()));
		}

		return imagesRepo.findAll();
	}

	// Movies
	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/getAllMovies", method = RequestMethod.GET)
	public List<Movies> getAllMovies() {
		return moviesRepo.findAll();
	}

	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/saveMovie", method = RequestMethod.POST)
	public String saveMovie(@RequestBody MoviesDTO movie) {
		List<Categories> categories = categoriesRepo.findAllById(movie.getCategories());
		if (categories.isEmpty()) {
			return "Category not available";
		}
		List<Images> images = imagesRepo.findAllById(movie.getImages());
		if (images.isEmpty()) {
			return "Images not available";
		}
		Movies movies = new Movies(movie.getTitle(), movie.getDescription(), categories, images);
		moviesRepo.save(movies);
		return movies.toString();
	}

	@CrossOrigin
	@ResponseBody
	@RequestMapping(value = "/saveMovies", method = RequestMethod.POST)
	public Object saveMovies(@RequestBody List<MoviesDTO> movies) {
		for (MoviesDTO movie : movies) {
			List<Categories> categories = categoriesRepo.findAllById(movie.getCategories());
			if (categories.isEmpty()) {
				return "Category not available";
			}
			List<Images> images = imagesRepo.findAllById(movie.getImages());
			if (images.isEmpty()) {
				return "Images not available";
			}
			Movies _movies = new Movies(movie.getTitle(), movie.getDescription(), categories, images);
			moviesRepo.save(_movies);
		}

		return imagesRepo.findAll();
	}
}
