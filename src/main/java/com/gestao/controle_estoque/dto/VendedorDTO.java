package com.gestao.controle_estoque.dto;

import com.gestao.controle_estoque.entities.Vendedor;

public class VendedorDTO {
    private Long id;
    private String nome; 
    
    
    public VendedorDTO() {
    	
    }
    
    public VendedorDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }
    
    public VendedorDTO(Vendedor vendedor) {
    	this.id = vendedor.getId();
    	this.nome = vendedor.getName();
    }
    
    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
