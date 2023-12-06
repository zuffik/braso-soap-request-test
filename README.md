# Setup

To run this script you need to have node.js installed (we use version 18.17.1 https://nodejs.org/en).
Then install dependencies using (`npm install`). As the last step, run `npm run test`.

The result I am getting below. It may vary (e.g. on linux I'm getting ECONNREFUSED)

```
AxiosError: connect ETIMEDOUT 31.10.207.96:80
    at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1555:16) {
  port: 80,
  address: '31.10.207.96',
  syscall: 'connect',
  code: 'ETIMEDOUT',
  errno: -60,
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: [Function: httpAdapter],
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [Function: transformResponse],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: [Function] },
    validateStatus: null,
    headers: {
      Accept: 'text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.8',
      'Content-Type': 'text/xml; charset=utf-8',
      'User-Agent': 'node-soap/1.0.0',
      'Accept-Encoding': 'none',
      'Accept-Charset': 'utf-8',
      Connection: 'close',
      Host: 'kis.braso.ch',
      'Content-Length': 778,
      SOAPAction: '"KIS_WS/opExxtro_GetCompanyLicences"'
    },
    url: 'http://kis.braso.ch/Kis_WS/Kis_WS.asmx',
    method: 'post',
    data: '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xmlns:tns="KIS_WS" xmlns:tm="http://microsoft.com/wsdl/mime/textMatching/"><soap:Body><opExxtro_GetCompanyLicences xmlns="KIS_WS"><p_sUID>CHX-992.633.900</p_sUID><r_nLicenceCount><Value>0</Value><IsNull>1</IsNull></r_nLicenceCount><r_nLicenceFree><Value>0</Value><IsNull>1</IsNull></r_nLicenceFree><r_dtExxtroLiz_Bis><Value>2023-01-01</Value><IsNull>1</IsNull></r_dtExxtroLiz_Bis><r_adtUsers><User><ID_User><Value>0</Value><IsNull>1</IsNull></ID_User><Reg_Datum><Value>2023-01-01</Value><IsNull>1</IsNull></Reg_Datum></User></r_adtUsers><p_bTest>0</p_bTest></opExxtro_GetCompanyLicences></soap:Body></soap:Envelope>'
  },
  request: <ref *1> Writable {
    _writableState: WritableState {
      objectMode: false,
      highWaterMark: 16384,
      finalCalled: false,
      needDrain: false,
      ending: false,
      ended: false,
      finished: false,
      destroyed: false,
      decodeStrings: true,
      defaultEncoding: 'utf8',
      length: 0,
      writing: false,
      corked: 0,
      sync: true,
      bufferProcessing: false,
      onwrite: [Function: bound onwrite],
      writecb: null,
      writelen: 0,
      afterWriteTickInfo: null,
      buffered: [],
      bufferedIndex: 0,
      allBuffers: true,
      allNoop: true,
      pendingcb: 0,
      constructed: true,
      prefinished: false,
      errorEmitted: false,
      emitClose: true,
      autoDestroy: true,
      errored: null,
      closed: false,
      closeEmitted: false,
      [Symbol(kOnFinished)]: []
    },
    _events: [Object: null prototype] {
      response: [Function: handleResponse],
      error: [Function: handleRequestError],
      socket: [Function: handleRequestSocket]
    },
    _eventsCount: 3,
    _maxListeners: undefined,
    _options: {
      maxRedirects: 21,
      maxBodyLength: 10485760,
      protocol: 'http:',
      path: '/Kis_WS/Kis_WS.asmx',
      method: 'POST',
      headers: [Object],
      agent: undefined,
      agents: [Object],
      auth: undefined,
      hostname: 'kis.braso.ch',
      port: null,
      nativeProtocols: [Object],
      pathname: '/Kis_WS/Kis_WS.asmx'
    },
    _ended: false,
    _ending: true,
    _redirectCount: 0,
    _redirects: [],
    _requestBodyLength: 778,
    _requestBodyBuffers: [ [Object] ],
    _onNativeResponse: [Function (anonymous)],
    _currentRequest: ClientRequest {
      _events: [Object: null prototype],
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      maxRequestsOnConnectionReached: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: true,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      strictContentLength: false,
      _contentLength: 778,
      _hasBody: true,
      _trailer: '',
      finished: false,
      _headerSent: true,
      _closed: false,
      socket: [Socket],
      _header: 'POST /Kis_WS/Kis_WS.asmx HTTP/1.1\r\n' +
        'Accept: text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.8\r\n' +
        'Content-Type: text/xml; charset=utf-8\r\n' +
        'User-Agent: node-soap/1.0.0\r\n' +
        'Accept-Encoding: none\r\n' +
        'Accept-Charset: utf-8\r\n' +
        'Connection: close\r\n' +
        'Host: kis.braso.ch\r\n' +
        'Content-Length: 778\r\n' +
        'SOAPAction: "KIS_WS/opExxtro_GetCompanyLicences"\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      _onPendingData: [Function: nop],
      agent: [Agent],
      socketPath: undefined,
      method: 'POST',
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      joinDuplicateHeaders: undefined,
      path: '/Kis_WS/Kis_WS.asmx',
      _ended: false,
      res: null,
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: 'kis.braso.ch',
      protocol: 'http:',
      _redirectable: [Circular *1],
      [Symbol(kCapture)]: false,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(kNeedDrain)]: false,
      [Symbol(corked)]: 0,
      [Symbol(kOutHeaders)]: [Object: null prototype],
      [Symbol(errored)]: null,
      [Symbol(kHighWaterMark)]: 16384,
      [Symbol(kRejectNonStandardBodyWrites)]: false,
      [Symbol(kUniqueHeaders)]: null
    },
    _currentUrl: 'http://kis.braso.ch/Kis_WS/Kis_WS.asmx',
    [Symbol(kCapture)]: false
  }
}
```