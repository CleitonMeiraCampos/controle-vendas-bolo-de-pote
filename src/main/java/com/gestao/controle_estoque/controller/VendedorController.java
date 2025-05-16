package com.gestao.controle_estoque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gestao.controle_estoque.entities.Vendedor;
import com.gestao.controle_estoque.service.VendedorService;

@RestController
@RequestMapping(value="vendedor")
public class VendedorController {
	
	@Autowired
	VendedorService vendedorService;
	
	@GetMapping
	public List<Vendedor> listarVendedores(){
		return vendedorService.listarVendedores();
	}
	
	@PostMapping
	public Vendedor cadastrarVendedor(@RequestBody Vendedor vendedor) {
		return vendedorService.cadastrarVendedor(vendedor);
	}
	
	@DeleteMapping
	public List<Vendedor> deletarVendedor(@RequestParam Long id){
		return vendedorService.deletarVendedor(id);
	}
	
	@PutMapping
	public Vendedor atualizarVendedor(@RequestParam Long idVendedor, @RequestBody Vendedor vendedor) {
		return vendedorService.atualizarVendedor(idVendedor, vendedor);
	}
	
	@PostMapping("/login")
	public  ResponseEntity<Vendedor> login(@RequestBody Vendedor vendedor){
		return vendedorService.login(vendedor);
	}
	
}
