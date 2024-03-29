package com.project.blog.model;

import java.io.IOException;
import java.time.Instant;

import org.springframework.web.multipart.MultipartFile;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import com.project.blog.model.User;


@Data
@Entity
@Table
public class Post {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;


@Column
private String title;

@Lob
@NotEmpty
@Column(columnDefinition = "LONGTEXT") 
private String content;
@Column
private Instant createdOn;


@Column
private Instant updatedOn;

@Column
@NotBlank
private String username ; 

@ManyToOne
@JoinColumn(name = "user_id")
private User user; 


@Lob
@Column(name = "authorImage", columnDefinition = "MEDIUMBLOB")
private byte[] authorImage;


public void setAuthorImage(MultipartFile file) {
    try {
        this.authorImage = file.getBytes();
    } catch (IOException e) {
        // Handle the exception (e.g., log it) or throw a custom exception
        throw new RuntimeException("Failed to set author image", e);
    }
}

public byte[] getAuthorImage() {
    return authorImage;
}

	
public String toString() {
    return "Post{" +
            "id=" + id +
            ", title='" + title + '\'' +
            ", content='" + content + '\'' +
            ", createdOn=" + createdOn +
            // Exclude user from toString to avoid circular reference
            ", user=" + username +
            '}';
}
}



















