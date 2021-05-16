import { Injectable } from '@nestjs/common'
import * as miio from '@indexyz/miio'
import * as config from 'config'

type DataResponse = {
    power: number
    status: boolean
}

@Injectable()
export class ChuangMiService {
    private initDevice: boolean = false
    device: any

    async getData(): Promise<DataResponse> {
        if (!this.initDevice) {
            this.device = await miio.device({
                address: config.get('xiaomi.ip'),
                token: config.get('xiaomi.token')
            })

            this.initDevice = true
            console.log('init OK')
        }


        return {
            power: await this.device.powerState() / 100,
            status: await this.device.power()
        }
    }
}
