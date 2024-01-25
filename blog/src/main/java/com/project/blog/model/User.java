package com.project.blog.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import com.project.blog.model.Post;

@Data
@Entity
@Table
public class User {

@Id 
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id ; 

@Column(unique=true)
@NotBlank(message = "username cannot be blank")
private String userName ; 

@NotBlank(message = "Password cannot be blank")
@Column
private String password ; 

@Column(unique=true)
@NotBlank(message = "email cannot be blank")
private String email ; 

@OneToMany
private List<Post> post = new ArrayList<>();

private String bio ; 

@Lob
@Column(name = "profilePicture", columnDefinition="MEDIUMBLOB")
private byte[] profilePicture;




	
	
}
















