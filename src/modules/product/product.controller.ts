import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    try {
      const newProduct =
        await this.productService.createProduc(createProductDto);
      return res.status(HttpStatus.CREATED).json(newProduct);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllProduct(@Res() res) {
    try {
      const allProducts = await this.productService.findAllProduct();
      return res.status(HttpStatus.OK).json(allProducts);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneProduct(@Res() res, @Param('id') id: string) {
    try {
      const oneProduct = await this.productService.findOneProduct(id);
      if (!oneProduct) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Product not found' });
      }
      return res.status(HttpStatus.OK).json(oneProduct);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateProduct(
    @Res() res,
    @Param('id') id: string,
    @Body() updateProductDto: CreateProductDto,
  ) {
    try {
      const updatedProduct = await this.productService.updateProduct(
        id,
        updateProductDto,
      );
      if (!updatedProduct) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Product not found' });
      }
      return res.status(HttpStatus.OK).json(updatedProduct);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeProduct(@Res() res, @Param('id') id: string) {
    try {
      const removedProduct = await this.productService.removeProduct(id);
      if (!removedProduct) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Product not found' });
      }
      return res.status(HttpStatus.OK).json(removedProduct);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
