import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsuarioModel } from "../usuario/usuario.model";
 
@Entity("agencias")
export class AgenciaModel {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    nome: string

    @Column({name: "nome_fantasia"})
    nomeFantasia: string

    @Column()
    cnpj:string 

    @Column()
    email: string

    @Column()
    telefone: string

    @Column()
    whatsapp: string

    @Column()
    site: string

    @Column()
    cep: string

    @Column()
    endereco: string

    @Column()
    numero: string

    @Column()
    complemento: string

    @Column()
    bairro: string

    @Column()
    cidade: string

    @Column()
    estado: string

    @OneToOne(() => UsuarioModel)
    @JoinColumn({name: "usuario_id"})
    usuario: UsuarioModel 

    @Column()
    ativo: boolean

    @CreateDateColumn({name: "created_at"})
    createDate: Date 

    @UpdateDateColumn({name: "updated_at"})
    updateDate: Date
 
}