package com.tmnrp.moviesdb.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tmnrp.moviesdb.dto.Movie;
import com.tmnrp.moviesdb.entity.Categories;
import com.tmnrp.moviesdb.entity.Images;
import com.tmnrp.moviesdb.entity.Movies;
import com.tmnrp.moviesdb.repository.CategoriesRepository;
import com.tmnrp.moviesdb.repository.ImagesRepository;
import com.tmnrp.moviesdb.repository.MoviesRepository;

@Controller
@RequestMapping(value = "/moviesdb")
public class MoviesDBController {

	@Autowired
	private MoviesRepository moviesRepo;

	@Autowired
	private ImagesRepository imagesRepo;

	@Autowired
	private CategoriesRepository categoriesRepo;

	@ResponseBody
	@RequestMapping(value = "/getAllCategories", method = RequestMethod.GET)
	public List<Categories> findAllCategories() {
		return categoriesRepo.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/getAllImages", method = RequestMethod.GET)
	public List<Images> findAllImages() {
		return imagesRepo.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/getAllMovies1", method = RequestMethod.GET)
	public List<Movies> findAllMovies1() {
		return moviesRepo.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/getAllMovies", method = RequestMethod.GET)
	public List<Movies> findAllMovies() {
		List<Movies> moviesList = moviesRepo.findAll();
		List<Movie> moviePojo = new ArrayList<>();
		/*
		 * for(Movies movies : moviesList) { Movie movie= new Movie();
		 * movie.setMovieId(movies.getId()); movie.setTitle(movies.getTitle());
		 * movie.setDescription(movies.getDescription());
		 * 
		 * 
		 * }
		 */

		return moviesList;
	}
}
