import {Client, createClientAsync} from "soap";

async function sendSoapRequest<T>({client, operation, data}: {
    client: Client,
    operation: string,
    data: any
}): Promise<T> {
    const op = `${operation}Async`
    const d = {...data, p_bTest: 0}
    console.log(`Sending request ${op} with data \n${JSON.stringify(d, undefined, 2)}`)
    const [responseData] = await client[op](d);
    return responseData as T;
}

async function main() {
    console.log('Starting')
    const url = 'https://kis.braso.ch/Kis_WS/Kis_WS.asmx';
    const client = await createClientAsync(`${url}?WSDL`)
    console.log('Created client')
    const registrationId = 'CHX-992.633.900'
    return sendSoapRequest({
        client,
        operation: 'opExxtro_GetCompanyLicences',
        data: {
            p_sUID: registrationId,
            r_nLicenceCount: { Value: 0, IsNull: 1 },
            r_nLicenceFree: { Value: 0, IsNull: 1 },
            r_dtExxtroLiz_Bis: { Value: '2023-01-01', IsNull: 1 },
            r_adtUsers: { User: { ID_User: { Value: 0, IsNull: 1 }, Reg_Datum: { Value: '2023-01-01', IsNull: 1 } } }
        }
    })
}

main().catch(console.error).then(console.log)