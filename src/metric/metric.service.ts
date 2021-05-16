import { Injectable } from '@nestjs/common'
import { Counter, Registry, Gauge } from 'prom-client'

@Injectable()
export class MetricService {
    private register: Registry;
    public restRequestCounter: Counter<string>;
    public powerLoad: Gauge<string>;

    constructor() {
        this.register = new Registry()

        this.powerLoad = new Gauge({
            name: 'current_power_load',
            help: 'Current plug power status',
            registers: [ this.register ],
        })
    }

    public async getMetrics(): Promise<string> {
        return await this.register.metrics()
    }
}
