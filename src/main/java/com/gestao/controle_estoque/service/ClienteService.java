package com.gestao.controle_estoque.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestao.controle_estoque.entities.Cliente;
import com.gestao.controle_estoque.repository.ClienteRepository;

@Service
public class ClienteService {
	
    @Autowired
    ClienteRepository clienteRepository;

    public List<Cliente> buscarClientes() {
        return clienteRepository.findAll();
    }
    
	public List<Cliente> buscarPorNome(String name){
    	
		return clienteRepository.findByNameContaining(name);
    	
    }

    public Cliente cadastrarCliente(Cliente cliente) {
    	return clienteRepository.save(cliente); 
    }
    
    public List<Cliente> deletarCliente(Long id){
    	clienteRepository.deleteById(id);
    	return clienteRepository.findAll();
    }
    
    public Cliente vender(Long id, Double valueProduto) {
    	Cliente clienteExist = clienteRepository.findById(id).orElseThrow(()-> new RuntimeException("Cliente não encotrado"));
    	clienteExist.setValueToPay(clienteExist.getValueToPay() + valueProduto);
    	
    	return clienteRepository.save(clienteExist);
    }
    
    public Cliente pagarDivida(Long id, Double valuePay) {
    	Cliente clienteExist = clienteRepository.findById(id).orElseThrow(()-> new RuntimeException("Cliente não encontrado"));
    	clienteExist.setValueToPay(clienteExist.getValueToPay() - valuePay);
    	
    	return clienteRepository.save(clienteExist);
    }
}


