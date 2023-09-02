const crypto = require('crypto');

const chainData = (params) => {
  return Object.keys(params)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
      .join('&');
}
const aseEncrypt = (text, key, iv) => {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function newebpay(req, res) {

  const URL = process.env.NEWEBPAY_SHOP_MPG_URL;
  const HASH_KEY = process.env.NEWEBPAY_SHOP_HASH_KEY;
  const HASH_IV = process.env.NEWEBPAY_SHOP_HASH_IV;
  const MerchantID = process.env.NEWEBPAY_SHOP_MID;

  const chainedData = chainData({
    MerchantID: MerchantID,
    RespondType: 'JSON',
    TimeStamp: Date.now(),
    Version: '2.0',
    MerchantOrderNo: 'Vanespl_ec_' + Date.now(),
    Amt: 30,
    ItemDesc: 'test',
  })
  const asedData = aseEncrypt(chainedData, HASH_KEY, HASH_IV)
  const hashs = 'HashKey=' + HASH_KEY + '&' + asedData + '&HashIV=' + HASH_IV;
  const hash = crypto.createHash('sha256').update(hashs).digest('hex').toUpperCase();
  const tradeInfo = {      
    MerchantID: MerchantID,
    TradeInfo: asedData,
    TradeSha: hash,
    Version: '2.0',
  }
  console.log(tradeInfo)
  res.send({
    url: URL,
    tradeInfo: tradeInfo,
  })
}

module.exports = newebpay;