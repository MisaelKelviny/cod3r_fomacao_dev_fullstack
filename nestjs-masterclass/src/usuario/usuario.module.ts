import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { UsuarioController } from './usuario.controller';
import { UsuarioRepository } from './usuario.repository';

@Module({
  imports: [DbModule],
  controllers: [UsuarioController],
  providers: [UsuarioRepository],
})
export class UsuarioModule {}
