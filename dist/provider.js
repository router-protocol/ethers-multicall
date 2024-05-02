"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMulticallAddress = exports.Provider = void 0;
var call_1 = require("./call");
var calls_1 = require("./calls");
var Provider = /** @class */ (function () {
    function Provider(provider, chainId) {
        this._provider = provider;
        this._multicallAddress = getAddressForChainId(chainId);
    }
    Provider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Only required if `chainId` was not provided in constructor
                        _a = this;
                        return [4 /*yield*/, getAddress(this._provider)];
                    case 1:
                        // Only required if `chainId` was not provided in constructor
                        _a._multicallAddress = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.getEthBalance = function (address) {
        if (!this._provider) {
            throw new Error('Provider should be initialized before use.');
        }
        return calls_1.getEthBalance(address, this._multicallAddress);
    };
    Provider.prototype.all = function (calls) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._provider) {
                    throw new Error('Provider should be initialized before use.');
                }
                return [2 /*return*/, call_1.all(calls, this._multicallAddress, this._provider)];
            });
        });
    };
    return Provider;
}());
exports.Provider = Provider;
var multicallAddresses = {
    1: "0xcA11bde05977b3631167028862bE2a173976CA11",
    3: "0xcA11bde05977b3631167028862bE2a173976CA11",
    4: "0xcA11bde05977b3631167028862bE2a173976CA11",
    5: "0xcA11bde05977b3631167028862bE2a173976CA11",
    10: "0xcA11bde05977b3631167028862bE2a173976CA11",
    14: "0xcA11bde05977b3631167028862bE2a173976CA11",
    16: "0xcA11bde05977b3631167028862bE2a173976CA11",
    18: "0xcA11bde05977b3631167028862bE2a173976CA11",
    19: "0xcA11bde05977b3631167028862bE2a173976CA11",
    25: "0xcA11bde05977b3631167028862bE2a173976CA11",
    30: "0xcA11bde05977b3631167028862bE2a173976CA11",
    31: "0xcA11bde05977b3631167028862bE2a173976CA11",
    40: "0xcA11bde05977b3631167028862bE2a173976CA11",
    42: "0xcA11bde05977b3631167028862bE2a173976CA11",
    44: "0xcA11bde05977b3631167028862bE2a173976CA11",
    46: "0xcA11bde05977b3631167028862bE2a173976CA11",
    50: "0xcA11bde05977b3631167028862bE2a173976CA11",
    51: "0xcA11bde05977b3631167028862bE2a173976CA11",
    56: "0xcA11bde05977b3631167028862bE2a173976CA11",
    57: "0xcA11bde05977b3631167028862bE2a173976CA11",
    61: "0xcA11bde05977b3631167028862bE2a173976CA11",
    66: "0xcA11bde05977b3631167028862bE2a173976CA11",
    69: "0xcA11bde05977b3631167028862bE2a173976CA11",
    82: "0xcA11bde05977b3631167028862bE2a173976CA11",
    83: "0xcA11bde05977b3631167028862bE2a173976CA11",
    97: "0xcA11bde05977b3631167028862bE2a173976CA11",
    100: "0xcA11bde05977b3631167028862bE2a173976CA11",
    106: "0xcA11bde05977b3631167028862bE2a173976CA11",
    108: "0xcA11bde05977b3631167028862bE2a173976CA11",
    109: "0xcA11bde05977b3631167028862bE2a173976CA11",
    114: "0xcA11bde05977b3631167028862bE2a173976CA11",
    122: "0xcA11bde05977b3631167028862bE2a173976CA11",
    128: "0xcA11bde05977b3631167028862bE2a173976CA11",
    137: "0xcA11bde05977b3631167028862bE2a173976CA11",
    148: "0xcA11bde05977b3631167028862bE2a173976CA11",
    169: "0xcA11bde05977b3631167028862bE2a173976CA11",
    195: "0xcA11bde05977b3631167028862bE2a173976CA11",
    199: "0xcA11bde05977b3631167028862bE2a173976CA11",
    204: "0xcA11bde05977b3631167028862bE2a173976CA11",
    250: "0xcA11bde05977b3631167028862bE2a173976CA11",
    252: "0xcA11bde05977b3631167028862bE2a173976CA11",
    280: "0xcA11bde05977b3631167028862bE2a173976CA11",
    288: "0xcA11bde05977b3631167028862bE2a173976CA11",
    300: "0xcA11bde05977b3631167028862bE2a173976CA11",
    311: "0xcA11bde05977b3631167028862bE2a173976CA11",
    314: "0xcA11bde05977b3631167028862bE2a173976CA11",
    321: "0xcA11bde05977b3631167028862bE2a173976CA11",
    324: "0xF9cda624FBC7e059355ce98a31693d299FACd963",
    335: "0xcA11bde05977b3631167028862bE2a173976CA11",
    338: "0xcA11bde05977b3631167028862bE2a173976CA11",
    369: "0xcA11bde05977b3631167028862bE2a173976CA11",
    420: "0xcA11bde05977b3631167028862bE2a173976CA11",
    424: "0xcA11bde05977b3631167028862bE2a173976CA11",
    462: "0xcA11bde05977b3631167028862bE2a173976CA11",
    464: "0xcA11bde05977b3631167028862bE2a173976CA11",
    570: "0xcA11bde05977b3631167028862bE2a173976CA11",
    592: "0xcA11bde05977b3631167028862bE2a173976CA11",
    599: "0xcA11bde05977b3631167028862bE2a173976CA11",
    710: "0xcA11bde05977b3631167028862bE2a173976CA11",
    813: "0xcA11bde05977b3631167028862bE2a173976CA11",
    820: "0xcA11bde05977b3631167028862bE2a173976CA11",
    943: "0xcA11bde05977b3631167028862bE2a173976CA11",
    999: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1001: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1088: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1101: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1115: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1116: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1130: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1131: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1234: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1284: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1285: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1287: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1442: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1992: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2000: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2001: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2020: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2021: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2222: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2358: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2415: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2522: "0xcA11bde05977b3631167028862bE2a173976CA11",
    3501: "0xcA11bde05977b3631167028862bE2a173976CA11",
    3502: "0xcA11bde05977b3631167028862bE2a173976CA11",
    3737: "0xcA11bde05977b3631167028862bE2a173976CA11",
    3776: "0xcA11bde05977b3631167028862bE2a173976CA11",
    3939: "0xcA11bde05977b3631167028862bE2a173976CA11",
    4002: "0xcA11bde05977b3631167028862bE2a173976CA11",
    4201: "0xcA11bde05977b3631167028862bE2a173976CA11",
    4689: "0xcA11bde05977b3631167028862bE2a173976CA11",
    4759: "0xcA11bde05977b3631167028862bE2a173976CA11",
    5000: "0xcA11bde05977b3631167028862bE2a173976CA11",
    5001: "0xcA11bde05977b3631167028862bE2a173976CA11",
    5101: "0xcA11bde05977b3631167028862bE2a173976CA11",
    5555: "0xcA11bde05977b3631167028862bE2a173976CA11",
    5611: "0xcA11bde05977b3631167028862bE2a173976CA11",
    5700: "0xcA11bde05977b3631167028862bE2a173976CA11",
    7000: "0xcA11bde05977b3631167028862bE2a173976CA11",
    7001: "0xcA11bde05977b3631167028862bE2a173976CA11",
    7518: "0xcA11bde05977b3631167028862bE2a173976CA11",
    7700: "0xcA11bde05977b3631167028862bE2a173976CA11",
    7701: "0xcA11bde05977b3631167028862bE2a173976CA11",
    7979: "0xcA11bde05977b3631167028862bE2a173976CA11",
    8082: "0xcA11bde05977b3631167028862bE2a173976CA11",
    8217: "0xcA11bde05977b3631167028862bE2a173976CA11",
    8453: "0xcA11bde05977b3631167028862bE2a173976CA11",
    9000: "0xcA11bde05977b3631167028862bE2a173976CA11",
    9001: "0xcA11bde05977b3631167028862bE2a173976CA11",
    9393: "0xcA11bde05977b3631167028862bE2a173976CA11",
    10200: "0xcA11bde05977b3631167028862bE2a173976CA11",
    10242: "0xcA11bde05977b3631167028862bE2a173976CA11",
    10243: "0xcA11bde05977b3631167028862bE2a173976CA11",
    11119: "0xcA11bde05977b3631167028862bE2a173976CA11",
    15557: "0xcA11bde05977b3631167028862bE2a173976CA11",
    17000: "0xcA11bde05977b3631167028862bE2a173976CA11",
    17777: "0xcA11bde05977b3631167028862bE2a173976CA11",
    23294: "0xcA11bde05977b3631167028862bE2a173976CA11",
    32520: "0xcA11bde05977b3631167028862bE2a173976CA11",
    32659: "0xcA11bde05977b3631167028862bE2a173976CA11",
    34443: "0xcA11bde05977b3631167028862bE2a173976CA11",
    35441: "0xcA11bde05977b3631167028862bE2a173976CA11",
    35442: "0xcA11bde05977b3631167028862bE2a173976CA11",
    35443: "0xcA11bde05977b3631167028862bE2a173976CA11",
    42161: "0xcA11bde05977b3631167028862bE2a173976CA11",
    42170: "0xcA11bde05977b3631167028862bE2a173976CA11",
    42220: "0xcA11bde05977b3631167028862bE2a173976CA11",
    42262: "0xcA11bde05977b3631167028862bE2a173976CA11",
    42766: "0xcA11bde05977b3631167028862bE2a173976CA11",
    43113: "0xcA11bde05977b3631167028862bE2a173976CA11",
    43114: "0xcA11bde05977b3631167028862bE2a173976CA11",
    44787: "0xcA11bde05977b3631167028862bE2a173976CA11",
    46688: "0xcA11bde05977b3631167028862bE2a173976CA11",
    53935: "0xcA11bde05977b3631167028862bE2a173976CA11",
    57000: "0xcA11bde05977b3631167028862bE2a173976CA11",
    58008: "0xcA11bde05977b3631167028862bE2a173976CA11",
    59140: "0xcA11bde05977b3631167028862bE2a173976CA11",
    59144: "0xcA11bde05977b3631167028862bE2a173976CA11",
    64240: "0xcA11bde05977b3631167028862bE2a173976CA11",
    71401: "0xcA11bde05977b3631167028862bE2a173976CA11",
    71402: "0xcA11bde05977b3631167028862bE2a173976CA11",
    80001: "0xcA11bde05977b3631167028862bE2a173976CA11",
    80085: "0xcA11bde05977b3631167028862bE2a173976CA11",
    81457: "0xcA11bde05977b3631167028862bE2a173976CA11",
    84531: "0xcA11bde05977b3631167028862bE2a173976CA11",
    84532: "0xcA11bde05977b3631167028862bE2a173976CA11",
    88888: "0xcA11bde05977b3631167028862bE2a173976CA11",
    94168: "0xcA11bde05977b3631167028862bE2a173976CA11",
    128123: "0xcA11bde05977b3631167028862bE2a173976CA11",
    167007: "0xcA11bde05977b3631167028862bE2a173976CA11",
    167008: "0xcA11bde05977b3631167028862bE2a173976CA11",
    421611: "0xcA11bde05977b3631167028862bE2a173976CA11",
    421613: "0xcA11bde05977b3631167028862bE2a173976CA11",
    421614: "0xcA11bde05977b3631167028862bE2a173976CA11",
    534351: "0xcA11bde05977b3631167028862bE2a173976CA11",
    534352: "0xcA11bde05977b3631167028862bE2a173976CA11",
    534353: "0xcA11bde05977b3631167028862bE2a173976CA11",
    660279: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1261120: "0xcA11bde05977b3631167028862bE2a173976CA11",
    7777777: "0xcA11bde05977b3631167028862bE2a173976CA11",
    11155111: "0xcA11bde05977b3631167028862bE2a173976CA11",
    11155420: "0xcA11bde05977b3631167028862bE2a173976CA11",
    12227330: "0xcA11bde05977b3631167028862bE2a173976CA11",
    23011913: "0xcA11bde05977b3631167028862bE2a173976CA11",
    37084624: "0xcA11bde05977b3631167028862bE2a173976CA11",
    68840142: "0xcA11bde05977b3631167028862bE2a173976CA11",
    168587773: "0xcA11bde05977b3631167028862bE2a173976CA11",
    245022926: "0xcA11bde05977b3631167028862bE2a173976CA11",
    245022934: "0xcA11bde05977b3631167028862bE2a173976CA11",
    728126428: "0xcA11bde05977b3631167028862bE2a173976CA11",
    974399131: "0xcA11bde05977b3631167028862bE2a173976CA11",
    999999999: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1020352220: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1313161554: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1350216234: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1444673419: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1482601649: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1564830818: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1666600000: "0xcA11bde05977b3631167028862bE2a173976CA11",
    2046399126: "0xcA11bde05977b3631167028862bE2a173976CA11",
    11297108109: "0xcA11bde05977b3631167028862bE2a173976CA11",
    11297108099: "0xcA11bde05977b3631167028862bE2a173976CA11",
    47279324479: "0xcA11bde05977b3631167028862bE2a173976CA11",
    1337: "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e",
    7545: "0xCf44A5BCD173039c37a9880cFE40Ba5691859e96",
    8545: "0x98Ef834a3415f8651A99a87929b6244D0c81A8d2",
    2494104990: "0xc18fea06c3f88359dab1a2f708b1298d5ac5caa3",
  };

function setMulticallAddress(chainId, address) {
    multicallAddresses[chainId] = address;
}
exports.setMulticallAddress = setMulticallAddress;
function getAddressForChainId(chainId) {
    return multicallAddresses[chainId];
}
function getAddress(provider) {
    return __awaiter(this, void 0, void 0, function () {
        var chainId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getNetwork()];
                case 1:
                    chainId = (_a.sent()).chainId;
                    return [2 /*return*/, getAddressForChainId(chainId)];
            }
        });
    });
}
