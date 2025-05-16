package com.gestao.controle_estoque.dto;

import com.gestao.controle_estoque.entities.Cliente;

public class ClienteDTO {
    private Long id;
    private String nome; 

    public ClienteDTO() {
    	
    }
    
    public ClienteDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }
    
    public ClienteDTO(Cliente cliente) {
    	this.id = cliente.getId();
    	this.nome = cliente.getName();
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
