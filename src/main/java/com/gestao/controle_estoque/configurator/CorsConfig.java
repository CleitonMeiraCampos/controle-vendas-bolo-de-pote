package com.gestao.controle_estoque.configurator;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer{

	    @Override
	    public void addCorsMappings(CorsRegistry registry) {
	        registry.addMapping("/**") // Define o mapeamento CORS para todos os endpoints da API
	                .allowedOrigins("http://localhost:5173") // Permite acesso de todos os origens (isso pode ser ajustado para domínios específicos)
	                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos HTTP permitidos
	                .allowedHeaders("*") // Todos os headers permitidos
	                .exposedHeaders("Authorization") // Headers que podem ser expostos além dos padrões
	                .allowCredentials(true) // Permite o envio de cookies e autenticação
	                .maxAge(3600); // Tempo máximo de cache da preflight request (em segundos)
	    }

}
