import { Controller, Get, Param, Patch } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('/api')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

    @Get('/:search')
    async getSearch(@Param('search') search: string) {
        return await this.searchService.getSearch(search);
    }
}