'use strict';
import { Service, PlatformAccessory, CharacteristicValue } from 'homebridge';
import { WiserPlatform } from './platform';
import { GroupSetEvent } from './models';
import { WiserAccessory } from './wiseraccessory';

export class WiserMotionSensor extends WiserAccessory {

    protected level = 0;

    constructor(
        protected readonly platform: WiserPlatform,
        protected readonly accessory: PlatformAccessory,
    ) {

        super(platform, accessory);
    }

    getName(): string {
        return (typeof this.accessory.context.device.name !== 'undefined') ? this.accessory.context.device.name :
            `Motion Sensor ${this.accessory.context.device.id}`;
    }

    setupService(): Service {
        const service = this.accessory.getService(this.platform.Service.MotionSensor) ||
            this.accessory.addService(this.platform.Service.MotionSensor);
        this.accessory.getService(this.platform.Service.AccessoryInformation)!
            .setCharacteristic(this.platform.Characteristic.Manufacturer, 'Clipsal')
            .setCharacteristic(this.platform.Characteristic.Model, 'Motion Sensor')
            .setCharacteristic(this.platform.Characteristic.SerialNumber, `${this.accessory.context.device.id}`.padStart(4, '0'));

        service.getCharacteristic(this.platform.Characteristic.MotionDetected)
            .onGet(this.handleMotionDetectedGet.bind(this));

        return service;
    }

    async handleMotionDetectedGet(): Promise<CharacteristicValue> {
        this.platform.log.debug(`Get MotionDetected state ${this.name}(${this.id}) ${this.level > 0}`);
        return this.level > 0;
    }

    setStatusFromEvent(groupSetEvent: GroupSetEvent) {

        this.level = this.toHomeKitLevel(groupSetEvent.level);

        this.platform.log.debug(`Update motion detected state ${this.level > 0}`);
        this.updateOnState();
    }

    updateOnState() {
        this.service!.updateCharacteristic(this.platform.Characteristic.MotionDetected, this.level > 0);
    }
}