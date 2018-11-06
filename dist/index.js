"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), ms);
        });
    });
}
function randomDelay() {
    return __awaiter(this, void 0, void 0, function* () {
        const randomTime = Math.round(Math.random() * 1000);
        return sleep(randomTime);
    });
}
class ShipmentSearchIndex {
    updateShipment(id, shipmentData) {
        return __awaiter(this, void 0, void 0, function* () {
            const startTime = new Date();
            yield randomDelay();
            const endTime = new Date();
            console.log(`update ${id}@${startTime.toISOString()} finished@${endTime.toISOString()}`);
            return {
                startTime,
                endTime
            };
        });
    }
}
class Update {
    receiveUpdate(id, shipmentData) {
        const shipmentSearchIndex = new ShipmentSearchIndex;
        shipmentSearchIndex.updateShipment(id, shipmentData);
    }
}
const update = new Update();
update.receiveUpdate('7', { dateOfArrival: '12/05/2019', port: 'Mombasa' });
//# sourceMappingURL=index.js.map