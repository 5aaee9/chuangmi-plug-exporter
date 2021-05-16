import { Module } from '@nestjs/common'
import { ChuangMiService } from './chuangmi.service'

@Module({
    controllers: [ ],
    providers: [ ChuangMiService ],
    exports: [ ChuangMiService ],
    imports: [ ],
})
export class ChuangMiModule {}
