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
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  async createStore(@Res() res, @Body() createStoreDto: CreateStoreDto) {
    try {
      const newStore = await this.storeService.createStore(createStoreDto);
      return res.status(HttpStatus.CREATED).json(newStore);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllStores(@Res() res) {
    try {
      const allStores = await this.storeService.findAllStores();
      return res.status(HttpStatus.OK).json(allStores);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneStore(@Res() res, @Param('id') id: string) {
    try {
      const store = await this.storeService.findOneStore(id);
      if (!store) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Store not found' });
      }
      return res.status(HttpStatus.OK).json(store);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateStore(
    @Res() res,
    @Param('id') id: string,
    @Body() updateStoreDto: CreateStoreDto,
  ) {
    try {
      const updatedStore = await this.storeService.updateStore(
        id,
        updateStoreDto,
      );
      if (!updatedStore) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Store not found' });
      }
      return res.status(HttpStatus.OK).json(updatedStore);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeStore(@Res() res, @Param('id') id: string) {
    try {
      const removedStore = await this.storeService.removeStore(id);
      if (!removedStore) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Store not found' });
      }
      return res.status(HttpStatus.OK).json(removedStore);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
