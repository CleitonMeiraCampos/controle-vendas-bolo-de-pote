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

import com.gestao.controle_estoque.entities.Cliente;
import com.gestao.controle_estoque.service.ClienteService;

@RestController
@RequestMapping(value="/cliente")
public class ClienteController {
	
	@Autowired
	ClienteService clienteService;
	
	@GetMapping
	public List<Cliente> buscarTodos(){
		return clienteService.buscarClientes();
	}
	
	@GetMapping("by-name")
	public List<Cliente> buscarPorName(@RequestParam String name){
		return clienteService.buscarPorNome(name);
	}
	
	@PostMapping
	public Cliente salvarCliente(@RequestBody Cliente cliente) {
	    return clienteService.cadastrarCliente(cliente);
	}
	
	@DeleteMapping
	public List<Cliente> deletarCliente(@RequestParam Long id){
		return clienteService.deletarCliente(id);
	}
	
	@PutMapping("/vender")
	public Cliente vender(@RequestParam Long idCliente, @RequestParam Double valueProduto) {
		return clienteService.vender(idCliente, valueProduto);
	}
	@PutMapping("/pagar")
	public Cliente pagar(@RequestParam Long idCliente, @RequestParam Double valuePay) {
		return clienteService.pagarDivida(idCliente, valuePay);
	}
}	
