package com.example.jap;

import java.lang.module.FindException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.jap.dto.UsersDTO;
import com.example.jap.model.Products;
import com.example.jap.model.Users;
import com.example.jap.repository.ProductRepo;
import com.example.jap.repository.UsersRepo;

@Controller
@RequestMapping(value = "/products")
public class JpaController {

	@Autowired
	private UsersRepo usersRepo;

	@Autowired
	private ProductRepo productRepo;

	@ResponseBody
	@RequestMapping(value = "/saveProduct", method = RequestMethod.POST)
	public List<Products> saveProduct(@RequestParam(name = "name") String name,
			@RequestParam(name = "price") double price,
			@RequestParam(name = "expirationDate", required = false) LocalDate expirationDate) {

		Products laptop = new Products();
		laptop.setName(name);
		laptop.setPrice(price);
		laptop.setExpirationDate(expirationDate);

		productRepo.save(laptop);
		return productRepo.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/getAllProducts", method = RequestMethod.GET)
	public List<Products> getAllProducts() {
		return productRepo.findAll();
	}

	@ResponseBody
	@RequestMapping(value = "/saveUser", method = RequestMethod.POST)
	public String saveUser(@RequestBody UsersDTO userDto) {

		List<Products> prod = new ArrayList<>();
		UUID productUUID = UUID.fromString(userDto.getProductUUID());
		prod.add(productRepo.findById(productUUID).get());

		Users user = new Users(userDto.getName(), prod);

		usersRepo.save(user);
		return usersRepo.findAll().toString();
	}

	@ResponseBody
	@RequestMapping(value = "/getAllUsers", method = RequestMethod.GET)
	public List<Users> getAllUsers() {
		return usersRepo.findAll();
	}
}
