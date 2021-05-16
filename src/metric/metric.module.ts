import { ChuangMiModule } from '@/chaungmi/chuangmi.module'
import { Module } from '@nestjs/common'
import { MetricController } from './metric.controller'
import { MetricService } from './metric.service'

@Module({
    controllers: [ MetricController ],
    providers: [ MetricService ],
    exports: [ MetricService ],
    imports: [ ChuangMiModule ],
})
export class MetricModule {}
