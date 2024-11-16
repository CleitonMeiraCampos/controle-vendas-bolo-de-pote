package com.gestao.controle_estoque.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Clientes")
public class Cliente {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
  
    private String name;
    private Double valueToPay;
    
    public Cliente(){
    	
    }
    
    public Cliente(String name) {
    	this.name = name;
    	this.valueToPay = 0.0;
    }
    
    public Cliente(String name, double valueToPay) {
    	this.name = name;
    	this.valueToPay = valueToPay;
    }
    
    public Long getId() {
    	return id;
    }
    public void setId(Long id) {
    	this.id = id;
    }
    
    public double getValueToPay() {
        return valueToPay;
    }
    
    public void setValueToPay(double valueToPay) {
        this.valueToPay = valueToPay;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

