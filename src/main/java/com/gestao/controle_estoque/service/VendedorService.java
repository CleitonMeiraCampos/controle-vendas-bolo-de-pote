package com.gestao.controle_estoque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.gestao.controle_estoque.entities.Vendedor;
import com.gestao.controle_estoque.repository.VendedorRepository;

@Service
public class VendedorService {
	
	@Autowired
	VendedorRepository vendedorRepository;
	
	public List<Vendedor> listarVendedores(){
		return vendedorRepository.findAll();
	}
	
	public Vendedor cadastrarVendedor(Vendedor vendedor) {
		return vendedorRepository.save(vendedor);
	}
	
	public List<Vendedor> deletarVendedor(Long idVendedor){
		vendedorRepository.deleteById(idVendedor);
		return listarVendedores();
	}
	public Vendedor atualizarVendedor(Long id, Vendedor vendedor) {
		Vendedor vendedorExist = vendedorRepository.findById(id).orElseThrow(()-> new RuntimeException("Vendedor não Encontrado"));
		vendedorExist.setName(vendedor.getName());
		vendedorExist.setPassword(vendedor.getPassword());
		
		return vendedorRepository.save(vendedorExist);
	}
	
	public ResponseEntity<Vendedor> login(Vendedor vendedorRequest){
		Vendedor vendedor = vendedorRepository.findByNameAndPassword(vendedorRequest.getName(), vendedorRequest.getPassword());
		if(vendedor != null){
			return ResponseEntity.ok(vendedor);
		}else{
			return ResponseEntity.status(404).build();
		}
	}

	
}
