package com.gestao.controle_estoque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.gestao.controle_estoque.entities.Produto;
import com.gestao.controle_estoque.service.ProdutoService;

@RestController
@RequestMapping(value="/produto")
public class ProdutoController {
	
	@Autowired
	ProdutoService produtoService;
	
	@GetMapping
	public List<Produto> listarProdutos(){
		return produtoService.listarProdutos();
	}
	
	@PostMapping
	public Produto cadastrarProduto(@RequestBody Produto produto) {
		return produtoService.cadastrarProduto(produto);
	}
	
	@DeleteMapping
	public List<Produto> deletarProduto(@RequestParam Long id) {
		return produtoService.deletarProduto(id);
	}
	
	@PutMapping
	public Produto atualizarProduto(@RequestParam Long id, @RequestBody Produto produto) {
		return produtoService.updateProduto(id, produto);
	}
}
