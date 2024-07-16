import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { TempModule } from './temp/temp.module';
import { DbModule } from './db/db.module';
import { DbPrismaService } from './db.prisma/db.prisma.service';

@Module({
  imports: [UsuarioModule, TempModule, DbModule],
  controllers: [],
  providers: [DbPrismaService],
})
export class AppModule {}
