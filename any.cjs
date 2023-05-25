const { default: TransportNodeHid } = require('@ledgerhq/hw-transport-node-hid');

const Sui = require('@mysten/ledgerjs-hw-app-sui').default;

const getPublicKey = async () => {
    const transport = await TransportNodeHid.create();
    const sui = new Sui(transport);
    return await sui.getPublicKey("m/44'/784'/0'/0'/0'");
};
const doAll = async () => {
    console.log(await getPublicKey());
    //console.log(await signTransaction());
    //console.log(await getVersion());
};

doAll().catch((err) => console.log(err));
