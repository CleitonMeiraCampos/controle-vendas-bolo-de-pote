package com.gestao.controle_estoque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.gestao.controle_estoque.entities.Vendedor;
import com.gestao.controle_estoque.repository.VendedorRepository;

@Service
public class VendedorService{
	@Autowired
	VendedorRepository vendedorRepository;
	
	public List<Vendedor> listarVendedores() {
		return vendedorRepository.findAll();
	}

	public Vendedor cadastrarVendedor(Vendedor vendedor) {
		return vendedorRepository.save(vendedor); 
	}

	public ResponseEntity<Vendedor> login(Vendedor vendedor) {
		// TODO Auto-generated method stub
		return null;
	}

	public Vendedor atualizarVendedor(Long idVendedor, Vendedor vendedor) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Vendedor> deletarVendedor(Long id) {
		// TODO Auto-generated method stub
		return null;
	}
	
}