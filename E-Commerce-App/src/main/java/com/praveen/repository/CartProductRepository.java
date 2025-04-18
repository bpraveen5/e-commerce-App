package com.praveen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.praveen.model.CartProduct;
import com.praveen.model.User;

@Repository
public interface CartProductRepository extends JpaRepository<CartProduct, Long> {
	List<CartProduct> findByUser(User user);}
