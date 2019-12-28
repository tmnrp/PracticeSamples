package com.example.jap;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.jap.model.Products;
import com.example.jap.repository.ProductRepo;

@Controller
@RequestMapping(value = "/products")
public class JpaController {

	@Autowired
	private ProductRepo productRepo;

	@ResponseBody
	@RequestMapping(value = "/saveProduct", method = RequestMethod.POST)
	public Products saveProduct(@RequestParam(name = "name") String name, @RequestParam(name = "price") double price,
			@RequestParam(name = "expirationDate", required = false) LocalDate expirationDate) {

		Products laptop = new Products();
		laptop.setName(name);
		laptop.setPrice(price);
		laptop.setExpirationDate(expirationDate);

		productRepo.save(laptop);
		return laptop;
	}

	@ResponseBody
	@RequestMapping(value = "/getAllProducts", method = RequestMethod.GET)
	public List<Products> getAllProducts() {
		return productRepo.findAll();
	}
}
