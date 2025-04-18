package com.praveen.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.praveen.model.CartProduct;
import com.praveen.repository.CartProductRepository;

@RestController
@RequestMapping("/api/cart")
public class CartProductController {

    @Autowired
    private CartProductRepository cartRepo;

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody CartProduct cartProduct) {
        return ResponseEntity.ok(cartRepo.save(cartProduct));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserCart(@PathVariable Long userId) {
        return ResponseEntity.ok(cartRepo.findById(userId));
    }


    @DeleteMapping("/remove/{id}")
    public ResponseEntity<?> removeItem(@PathVariable Long id) {
        cartRepo.deleteById(id);
        return ResponseEntity.ok("Removed from cart");
    }
}
