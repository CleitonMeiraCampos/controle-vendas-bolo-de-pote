package com.gestao.controle_estoque.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gestao.controle_estoque.entities.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
	
}
