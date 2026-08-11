import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaUsuario1785937741574 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS usuarios(
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                nome VARCHAR(150) NOT NULL,
                email VARCHAR(150) NOT NULL UNIQUE,
                senha VARCHAR(150) NOT NULL,
                url_foto VARCHAR(150),
                ativo BOOLEAN NOT NULL DEFAULT true,
                dt_cadastro TIMESTAMP NOT NULL DEFAULT 'now()'
            );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios")
    }

}
