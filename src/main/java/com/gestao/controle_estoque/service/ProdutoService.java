package com.gestao.controle_estoque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestao.controle_estoque.entities.Produto;
import com.gestao.controle_estoque.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	
	public List<Produto> listarProdutos(){
		return produtoRepository.findAll();
	}
	
	public Produto cadastrarProduto(Produto produto) {
		return produtoRepository.save(produto);
	}
	
	public List<Produto> deletarProduto(Long id) {
		produtoRepository.deleteById(id);
		return produtoRepository.findAll();
	}
	
	public Produto updateProduto(Long id, Produto produto) {
		Produto produtoExist = produtoRepository.findById(id).orElseThrow(()-> new RuntimeException("Produto não encontrado"));
		produtoExist.setName(produto.getName());
		produtoExist.setPrice(produto.getPrice());
		
		return produtoRepository.save(produtoExist);
		
	}
	
}
