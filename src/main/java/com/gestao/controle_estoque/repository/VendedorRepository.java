package com.gestao.controle_estoque.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gestao.controle_estoque.entities.Vendedor;

public interface VendedorRepository extends JpaRepository<Vendedor, Long>{
	Vendedor findByName(String Name);
}
