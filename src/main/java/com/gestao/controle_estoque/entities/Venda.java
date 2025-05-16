package com.gestao.controle_estoque.entities;

import java.time.LocalDate;

import com.gestao.controle_estoque.dto.VendaDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Venda {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "vendedor_id")
    private Vendedor vendedor;

    @ManyToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;
    

	private LocalDate data;
    private Double valorVenda;
    
    public Venda() {
    	
    }
    
    public Venda(Cliente cliente, Vendedor vendedor, Double valor, LocalDate data) {
    	this.cliente = cliente;
    	this.vendedor = vendedor;
    	this.valorVenda = valor;
    	this.data = data;
    }
    
    public Venda(VendaDTO vendaDTO) {
    	this.cliente.setId(vendaDTO.getIdCliente());
    	this.vendedor.setId(vendaDTO.getIdVendedor());
    	this.valorVenda = vendaDTO.getValorVenda();
    	this.data = vendaDTO.getData();
    }
    
    public Long getId() {
    	return id; 
    }

    public Vendedor getVendedor() {
		return vendedor;
	}
	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}
	public Cliente getCliente() {
		return cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
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
