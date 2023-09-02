import { CartContent } from "@/__generated__/types";

export const getTradeInfo = async (cartContent: CartContent) => {
  const tradeInfo = await fetch('/api/newebpay', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartContent)
  });
  const tradeInfoRES = await tradeInfo.json();
  console.log('tradeInfoRES', tradeInfoRES)

  const form = document.createElement('form');
  form.method = 'POST';
  form.action = tradeInfoRES.url;;  
  document.body.appendChild(form);


  Object.entries(tradeInfoRES.tradeInfo).forEach(([key, value]) => {
    let input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value as string;
    form.appendChild(input);
});

  form.submit();
}


