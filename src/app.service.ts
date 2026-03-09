import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ProductPatchDto, ProductPostDto } from './dto/product.dto';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  findAllProducts() {
    return this.prisma.client.product.findMany();
  }
  async findByIdProducts(id: number) {
    const product = await this.prisma.client.product.findUnique({
      where: { id },
    });
    if (!product) throw new NotFoundException(`Продукт с id ${id} не найден`);
    return product;
  }
  async addProduct(dto: ProductPostDto) {
    const existing = await this.prisma.client.product.findFirst({
      where: { title: dto.title },
    });
    if (existing)
      throw new ConflictException(`Продукт с таким title уже существует`);
    return this.prisma.client.product.create({ data: dto });
  }
  async updateProduct(id: number, dto: ProductPatchDto) {
    await this.findByIdProducts(id);
    return this.prisma.client.product.update({ where: { id }, data: dto });
  }
  async deleteProduct(id: number) {
    await this.findByIdProducts(id);
    return this.prisma.client.product.delete({ where: { id } });
  }
}
