package com.gestao.controle_estoque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.gestao.controle_estoque.dto.VendaDTO;
import com.gestao.controle_estoque.entities.Venda;
import com.gestao.controle_estoque.repository.ClienteRepository;
import com.gestao.controle_estoque.repository.VendaRepository;
import com.gestao.controle_estoque.repository.VendedorRepository;

@Service
public class VendaService {
	
	@Autowired
	VendaRepository vendaRepository;
	@Autowired
	ClienteRepository clienteRepository;
	@Autowired
	VendedorRepository vendedorRepository;
	
	
	
	public List<Venda> findAllSell() {
		return vendaRepository.findAll();
	}

	public VendaDTO sell(Venda venda) {
		
		Venda vendaToSave = venda;
		
		vendaToSave.setCliente(clienteRepository.findById(venda.getCliente().getId()).get());
		vendaToSave.setVendedor(vendedorRepository.findById(venda.getVendedor().getId()).get());
		
		VendaDTO vendaDTO = new VendaDTO(vendaRepository.save(vendaToSave));
		
		return vendaDTO;
		
	}

}