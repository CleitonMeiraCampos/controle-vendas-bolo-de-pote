package com.gestao.controle_estoque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestao.controle_estoque.dto.VendaDTO;
import com.gestao.controle_estoque.entities.Venda;
import com.gestao.controle_estoque.service.VendaService;

@RestController
@RequestMapping("sell")
public class VendaController {
	
	@Autowired
	VendaService vendaService;
	
	@GetMapping
	public List<Venda> ListAllSell(){
		return vendaService.findAllSell();
	}
	
	@PostMapping
	public VendaDTO sell(@RequestBody VendaDTO venda) {
		return vendaService.sell(venda);
	}
	
}
