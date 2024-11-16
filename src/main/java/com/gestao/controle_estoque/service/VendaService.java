package com.gestao.controle_estoque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gestao.controle_estoque.dto.VendaDTO;
import com.gestao.controle_estoque.entities.Cliente;
import com.gestao.controle_estoque.entities.Venda;
import com.gestao.controle_estoque.entities.Vendedor;
import com.gestao.controle_estoque.repository.ClienteRepository;
import com.gestao.controle_estoque.repository.VendaRepository;
import com.gestao.controle_estoque.repository.VendedorRepository;

@Service
public class VendaService {
	
	@Autowired
	VendaRepository vendaRepository;

	@Autowired
	ClienteRepository clienteRepository;  // Adicione este repositório
	@Autowired
	VendedorRepository vendedorRepository;  // Adicione este repositório
	
	public List<Venda> findAllSell() {
		return vendaRepository.findAll();
	}

	public VendaDTO sell(VendaDTO vendaDTO) {
		// Recuperar as entidades cliente e vendedor a partir dos IDs
		Cliente cliente = clienteRepository.findById(vendaDTO.getIdCliente())
			.orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

		Vendedor vendedor = vendedorRepository.findById(vendaDTO.getIdVendedor())
			.orElseThrow(() -> new RuntimeException("Vendedor não encontrado"));
		
		// Criar o objeto Venda a partir dos dados do DTO
		Venda venda = new Venda(cliente, vendedor, vendaDTO.getValorVenda(), vendaDTO.getData());
		
		// Salvar a venda no banco de dados
		Venda vendaRealizada = vendaRepository.save(venda);
		
		// Retornar o DTO com os dados da venda realizada
		return new VendaDTO(vendaRealizada);
	}

}