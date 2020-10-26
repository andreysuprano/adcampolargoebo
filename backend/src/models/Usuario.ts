import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn } from 'typeorm';

@Entity()
export default class Usuario{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;
    
    @Column()
    senha:string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}