import { ChuangMiService } from '@/chaungmi/chuangmi.service'
import { Controller, Get, Inject } from '@nestjs/common'
import { MetricService } from './metric.service'

@Controller('metric')
export class MetricController {
    constructor(
        @Inject(MetricService) private readonly metric: MetricService,
        @Inject(ChuangMiService) private readonly chuangmi: ChuangMiService
    ) {}

    @Get('data')
    async metricData(): Promise<string> {
        const data = await this.chuangmi.getData()

        this.metric.powerLoad.set(data.power)

        return this.metric.getMetrics()
    }
}
