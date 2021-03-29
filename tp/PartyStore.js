var { _hash } = require('./lib');
var { TP_NAMESPACE } = require('./constants');
var serialise = require('./serialiser');

class PartyStore {
    constructor(context) {
        this.context = context;
        this.timeout = 500;
    }

    async addParty(party,_ards) {
        const address = partyAddress(party.id);
        let partyInfo = { patient_Id: party.id, ards: _ards};
        let serialised = serialise(partyInfo);
        console.log(serialised);
        let data = Buffer.from(serialised);
        return await this.context.setState({ [address]: data }, this.timeout);
    }


    // async getParty(partyId) {
    //     const address = partyAddress(partyId);
    //     let partyInfo = await this.context.getState([address], this.timeout);
    //     const partyData = partyInfo[address];
    //     if (Buffer.isBuffer(partyData)) {
    //         const json = partyData.toString();
    //         const party = JSON.parse(json);
    //         return party;
    //     } else {
    //         return undefined;
    //     }
    // }
}

const partyAddress = partyId => TP_NAMESPACE + '01' + _hash(partyId).substring(0, 62);

module.exports = PartyStore;
