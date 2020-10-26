import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity()
export default class Inscricao{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;
    
    @Column()
    telefone:string;

    @Column()
    email:string;
    
    @Column()
    congregacao:string;

    @Column()
    cargo:string;
    
    @Column()
    statusPagamento:string;

    @Column()
    tipoPagamento:string;

    @Column()
    presenca1:string;

    @Column()
    presenca2:string;
    
    @Column()
    presenca3:string;

    @Column()
    presenca4:string;

    @Column()
    presenca5:string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}