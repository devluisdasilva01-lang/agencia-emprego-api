import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaAgencia1786453966374 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS agencias (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                nome VARCHAR(150) NOT NULL,
                nome_fantasia VARCHAR(150),
                cnpj VARCHAR(14),
                email VARCHAR(150) NOT NULL,
                telefone VARCHAR(20),
                whatsapp VARCHAR(20),
                site VARCHAR(200),
                cep VARCHAR(8),
                endereco VARCHAR(200),
                numero VARCHAR(20),
                complemento VARCHAR(100),
                bairro VARCHAR(100),
                cidade VARCHAR(100),
                estado VARCHAR(2),
                usuario_id UUID NOT NULL UNIQUE,
                ativo BOOLEAN NOT NULL DEFAULT true,
                created_at TIMESTAMP NOT NULL DEFAULT now(),
                updated_at TIMESTAMP NOT NULL DEFAULT now(),

                CONSTRAINT fk_agencias_usuario 
                    FOREIGN KEY (usuario_id) 
                        REFERENCES usuarios (id)
            );
        `)
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('agencias')
    }

}
