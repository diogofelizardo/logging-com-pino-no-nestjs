
import { Injectable, Logger } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private readonly logger = new Logger(CatsService.name);
  private readonly cats = [];

  create(createCatDto: CreateCatDto) {
    this.cats.push(createCatDto);
    this.logger.log(`Criado um novo gato: ${JSON.stringify(createCatDto)}`);
  }

  findAll() {
    this.logger.log('Retornando todos os gatos');
    return this.cats;
  }
}