package com.project.blog.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.project.blog.dto.RegisterRequest;
import com.project.blog.model.User;
import com.project.blog.repository.UserRepository;

@Service
public class AuthService {
	
@Autowired
private UserRepository userRepository ; 

@Autowired
private PasswordEncoder passwordEncoder ; 



	   public void signup(RegisterRequest registerRequest) {
	        User user = new User();
	        user.setUserName(registerRequest.getUsername());
	        user.setEmail(registerRequest.getEmail());
	        user.setPassword(encodePassword(registerRequest.getPassword() )  );

	        userRepository.save(user);
	    } 
	   
	   
	   private String encodePassword(String password) {
		   return passwordEncoder.encode(password) ; 
	   } 

}
