package com.project.blog.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.blog.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findByTitleContainingOrContentContaining(String title, String content);

	Iterable<Post> findByTitleContainingIgnoreCase(String query);

	Iterable<Post> findByTitleContainingIgnoreCase(String query, Sort sort);
}
