async function sleep(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}

async function randomDelay() {
    const randomTime = Math.round(Math.random() * 1000)
    return sleep(randomTime)
}

class ShipmentSearchIndex {
    async updateShipment(id: string, shipmentData: any) {
        const startTime = new Date()
        await randomDelay()
        const endTime = new Date()

        console.log(`update ${id}@${
          startTime.toISOString()
        } finished@${
          endTime.toISOString()
        }`)

        return {
            startTime,
            endTime
        }
    }
}

// Implementation needed
interface ShipmentUpdateListenerInterface {
    receiveUpdate(id: string, shipmentData: any): any
}

class Update implements ShipmentUpdateListenerInterface {
    receiveUpdate(id: string, shipmentData: any) {
        const shipmentSearchIndex = new ShipmentSearchIndex;
        shipmentSearchIndex.updateShipment(id, shipmentData);
    }
}

const update = new Update()
update.receiveUpdate('7', {dateOfArrival: '12/05/2019', port: 'Mombasa'})

