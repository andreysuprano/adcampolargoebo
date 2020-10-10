import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Inscricao{
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
    tipoInscricao:string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}