import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication) {
    const config = new DocumentBuilder() 
        .setTitle("API de  Gestão de Agencias de RH")
        .setDescription(`Gestão de agencias e recrutamento e seleção de candidatos`)
        .setVersion("1.0.0")
        .build()

    const documento = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup("docs", app, documento, {})
}