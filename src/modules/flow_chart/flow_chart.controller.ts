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
import { FlowChartService } from './flow_chart.service';
import { CreateFlowChartDto } from './dto';

@Controller('flow-chart')
export class FlowChartController {
  constructor(private readonly flowChartService: FlowChartService) {}

  @Post()
  async createFlowChart(
    @Res() res,
    @Body() createFlowChartDto: CreateFlowChartDto,
  ) {
    try {
      const newFlowChart =
        await this.flowChartService.createFlowChart(createFlowChartDto);
      return res.status(HttpStatus.CREATED).json(newFlowChart);
    } catch (error) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .json({ message: error.message });
    }
  }

  @Get()
  async findAllFlowCharts(@Res() res) {
    try {
      const allFlowCharts = await this.flowChartService.findAllFlowCharts();
      return res.status(HttpStatus.OK).json(allFlowCharts);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Get(':id')
  async findOneFlowChart(@Res() res, @Param('id') id: string) {
    try {
      const oneFlowChart = await this.flowChartService.findOneFlowChart(id);
      if (!oneFlowChart) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Flow Chart not found' });
      }
      return res.status(HttpStatus.OK).json(oneFlowChart);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Patch(':id')
  async updateFlowChart(
    @Res() res,
    @Param('id') id: string,
    @Body() updateFlowChartDto: CreateFlowChartDto,
  ) {
    try {
      const updatedFlowChart = await this.flowChartService.updateFlowChart(
        id,
        updateFlowChartDto,
      );
      if (!updatedFlowChart) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Flow Chart not found' });
      }
      return res.status(HttpStatus.OK).json(updatedFlowChart);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  @Delete(':id')
  async removeFlowChart(@Res() res, @Param('id') id: string) {
    try {
      const removedFlowChart = await this.flowChartService.removeFlowChart(id);
      if (!removedFlowChart) {
        return res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Flow Chart not found' });
      }
      return res.status(HttpStatus.OK).json(removedFlowChart);
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
