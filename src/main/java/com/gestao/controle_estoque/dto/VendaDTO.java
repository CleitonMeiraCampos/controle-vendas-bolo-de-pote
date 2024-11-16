package com.gestao.controle_estoque.dto;

import java.time.LocalDate;

import com.gestao.controle_estoque.entities.Venda;

public class VendaDTO {
	private Long id;
	private VendedorDTO vendedor;
	private ClienteDTO cliente;
	private LocalDate data;
    private Double valorVenda;
    
    public VendaDTO() {
    	
    }
    
    public VendaDTO(Venda venda) {
    	vendedor.setId(venda.getVendedor().getId());
    	cliente.setId(venda.getCliente().getId());
    	data = venda.getData();
    	valorVenda = venda.getValorVenda();
    }
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getIdVendedor() {
		return vendedor.getId();
	}
	public void setIdVendedor(Long idVendedor) {
		vendedor.setId(idVendedor);
	}
	public Long getIdCliente() {
		return cliente.getId();
	}
	public void setIdCliente(Long idCliente) {
		cliente.setId(idCliente);
	}
	public LocalDate getData() {
		return data;
	}
	public void setData(LocalDate data) {
		this.data = data;
	}
	public Double getValorVenda() {
		return valorVenda;
	}
	public void setValorVenda(Double valor) {
		this.valorVenda = valor;
	}
}
