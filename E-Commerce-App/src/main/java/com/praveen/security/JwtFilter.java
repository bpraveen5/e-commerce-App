package com.praveen.security;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import com.praveen.model.User;
import com.praveen.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRepository userRepo;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        // Bypass the filter for public endpoints
        String path = request.getRequestURI();
        if (path.startsWith("/api/auth") || path.startsWith("/api/products")) {
            filterChain.doFilter(request, response);
            return;
        }

        // Proceed with JWT auth for protected endpoints
        String token = request.getHeader("Authorization");
        String email = null;

        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            email = jwtUtil.extractUsername(token);
        }

        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            Optional<User> userOpt = userRepo.findByEmail(email);
            if (userOpt.isPresent() && jwtUtil.validateToken(token)) {
                User user = userOpt.get();

                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        email,
                        null,
                        List.of(() -> "ROLE_" + user.getRole()) // ROLE_ADMIN or ROLE_USER
                );

                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        filterChain.doFilter(request, response);
    }

}
