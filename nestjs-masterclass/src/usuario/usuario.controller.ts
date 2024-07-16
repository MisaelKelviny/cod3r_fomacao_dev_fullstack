import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private repo: UsuarioRepository) {}

  @Post()
  async criar(@Body() user: Usuario) {
    const newUser = await this.repo.criar(user);
    return newUser;
  }

  @Get()
  async findAll() {
    const usuarios = await this.repo.obterTodos();
    return usuarios;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const usuario = await this.repo.obterPorId(+id);
    return usuario;
  }

  @Patch(':id')
  async uploadById(@Param('id') id: string, @Body() usuario: Usuario) {
    const usuarioAtualizado = await this.repo.atualizar({
      ...usuario,
      id: +id,
    });

    return usuarioAtualizado;
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    await this.repo.deletar(+id);
  }
}
