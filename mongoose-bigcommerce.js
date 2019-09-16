let schema = '';

const obj = {
  "title": "Order",
  "example": {
    "id": 113,
    "customer_id": 1,
    "date_created": "Wed, 17 Jan 2018 20:11:21 +0000",
    "date_modified": "Wed, 25 Apr 2018 20:20:25 +0000",
    "date_shipped": "",
    "status_id": 7,
    "status": "Awaiting Payment",
    "subtotal_ex_tax": "143.9500",
    "subtotal_inc_tax": "143.9500",
    "subtotal_tax": "0.0000",
    "base_shipping_cost": "0.0000",
    "shipping_cost_ex_tax": "0.0000",
    "shipping_cost_inc_tax": "0.0000",
    "shipping_cost_tax": "0.0000",
    "shipping_cost_tax_class_id": 2,
    "base_handling_cost": "0.0000",
    "handling_cost_ex_tax": "0.0000",
    "handling_cost_inc_tax": "0.0000",
    "handling_cost_tax": "0.0000",
    "handling_cost_tax_class_id": 2,
    "base_wrapping_cost": "0.0000",
    "wrapping_cost_ex_tax": "0.0000",
    "wrapping_cost_inc_tax": "0.0000",
    "wrapping_cost_tax": "0.0000",
    "wrapping_cost_tax_class_id": 3,
    "total_ex_tax": "138.9500",
    "total_inc_tax": "138.9500",
    "total_tax": "0.0000",
    "items_total": 2,
    "items_shipped": 0,
    "payment_method": "Cash on Delivery",
    "payment_provider_id": null,
    "payment_status": "",
    "refunded_amount": "0.0000",
    "order_is_digital": false,
    "store_credit_amount": "0.0000",
    "gift_certificate_amount": "0.0000",
    "ip_address": "64.183.182.114",
    "geoip_country": "United States",
    "geoip_country_iso2": "US",
    "currency_id": 1,
    "currency_code": "USD",
    "currency_exchange_rate": "1.0000000000",
    "default_currency_id": 1,
    "default_currency_code": "USD",
    "staff_notes": "",
    "customer_message": "",
    "discount_amount": "0.0000",
    "coupon_discount": "5.0000",
    "shipping_address_count": 1,
    "is_deleted": false,
    "ebay_order_id": "0",
    "cart_id": "1cf3da59-1c90-42a9-82fb-2a954743a390",
    "billing_address": {
      "first_name": "Jane",
      "last_name": "Does",
      "company": "",
      "street_1": "123 MainStreet",
      "street_2": "",
      "city": "Austin",
      "state": "Texas",
      "zip": "78751",
      "country": "United States",
      "country_iso2": "US",
      "phone": "",
      "email": "jane@email.com",
      "form_fields": []
    },
    "is_email_opt_in": false,
    "credit_card_type": {},
    "order_source": "www",
    "external_source": {},
    "products": {
      "url": "https://api.bigcommerce.com/stores/{store_hash}/v2/orders/113/products",
      "resource": "/orders/113/products"
    },
    "shipping_addresses": {
      "url": "https://api.bigcommerce.com/stores/{store_hash}/v2/orders/113/shippingaddresses",
      "resource": "/orders/113/shippingaddresses"
    },
    "coupons": {
      "url": "https://api.bigcommerce.com/stores/{store_hash}/v2/orders/113/coupons",
      "resource": "/orders/113/coupons"
    },
    "external_id": {},
    "external_merchant_id": {},
    "custom_status": "Awaiting Payment"
  },
  "type": "object",
  "properties": {
    "id": {
      "description": "The ID of the order, a read-only value. Do not pass in PUT or POST.",
      "example": 118,
      "type": "integer"
    },
    "customer_id": {
      "description": "The ID of the customer placing the order; or 0 if it was a guest order.",
      "example": 6,
      "type": "number"
    },
    "date_created": {
      "type": "string",
      "description": "The date this order was created. If not specified, will default to the current time. The date should be in RFC 2822 format, e.g.: Tue, 20 Nov 2012 00:00:00 +0000"
    },
    "date_modified": {
      "type": "string",
      "description": "A read-only value representing the last modification of the order. Do not attempt to modify or set this value in a POST or PUT operation. RFC-2822"
    },
    "date_shipped": {
      "type": "string",
      "description": "A read-only value representing the date of shipment. Do not attempt to modify or set this value in a POST or PUT operation. RFC-2822"
    },
    "status_id": {
      "description": "The status ID of the order.",
      "example": 11,
      "type": "integer"
    },
    "cart_id": {
      "description": "The cart ID from which this order originated, if applicable. Correlates with the Cart API. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.",
      "example": "a8458391-ef68-4fe5-9ec1-442e6a767364",
      "type": "string"
    },
    "status": {
      "description": "The status will include one of the (string, optiona) - values defined under Order Statuses. This value is read-only. Do not attempt to modify or set this value in a POST or PUT operation.",
      "example": "Awaiting Fulfillment",
      "type": "string"
    },
    "custom_status": {
      "description": "Contains the same (string, optiona) - value as the Order Statuses object's `custom_label` property.",
      "example": "Awaiting Fulfillment",
      "type": "string"
    },
    "subtotal_ex_tax": {
      "description": "Override value for subtotal excluding tax. If specified, the field `subtotal_inc_tax` is also required. (Float, Float-As-String, Integer)",
      "example": "225.0000",
      "type": "string"
    },
    "subtotal_inc_tax": {
      "description": "Override value for subtotal including tax. If specified, the field `subtotal_ex_tax` is also required. (Float, Float-As-String, Integer)",
      "example": "225.0000",
      "type": "string"
    },
    "subtotal_tax": {
      "description": "A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "base_shipping_cost": {
      "description": "The value of the base shipping cost. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "shipping_cost_ex_tax": {
      "description": "The value of shipping cost, excluding tax. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "shipping_cost_inc_tax": {
      "description": "The value of shipping cost, including tax. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "shipping_cost_tax": {
      "description": "A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "shipping_cost_tax_class_id": {
      "description": "Shipping-cost tax class. A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)",
      "example": 2,
      "type": "integer"
    },
    "base_handling_cost": {
      "description": "The value of the base handling cost. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "handling_cost_ex_tax": {
      "description": "The value of the handling cost, excluding tax. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "handling_cost_inc_tax": {
      "description": "The value of the handling cost, including tax. (Float, Float-As-String, Integer)",
      "example": 0,
      "type": "string"
    },
    "handling_cost_tax": {
      "description": "A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "handling_cost_tax_class_id": {
      "description": "A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)",
      "example": 2,
      "type": "integer"
    },
    "base_wrapping_cost": {
      "description": "The value of the base wrapping cost. (Float, Float-As-String, Integer)",
      "example": 0,
      "type": "string"
    },
    "wrapping_cost_ex_tax": {
      "description": "The value of the wrapping cost, excluding tax. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "wrapping_cost_inc_tax": {
      "description": "The value of the wrapping cost, including tax. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "wrapping_cost_tax": {
      "description": "A read-only value. Do not attempt to modify or set this value in a POST or PUT operation. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "wrapping_cost_tax_class_id": {
      "description": "A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (NOTE: Value ignored if automatic tax is enabled on the store.)",
      "example": 3,
      "type": "integer"
    },
    "total_ex_tax": {
      "description": "Override value for the total, excluding tax. If specified, the field `total_inc_tax` is also required. (Float, Float-As-String, Integer)",
      "example": "225.0000",
      "type": "string"
    },
    "total_inc_tax": {
      "description": "Override value for the total, including tax. If specified, the field `total_ex_tax` is also required. (Float, Float-As-String, Integer) ",
      "example": "225.0000",
      "type": "string"
    },
    "total_tax": {
      "description": "A read-only value. Do not attempt to set or modify this value in a POST or PUT operation. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "items_total": {
      "description": "The total number of items in the order.",
      "example": 1,
      "type": "number"
    },
    "items_shipped": {
      "description": "The number of items that have been shipped.",
      "example": 0,
      "type": "number"
    },
    "payment_method": {
      "description": "The payment method for this order. Can be one of the following: `Manual`, `Credit Card`, `cash`, `Test Payment Gateway`, etc.",
      "example": "Cash on Delivery",
      "type": "string"
    },
    "payment_provider_id": {
      "description": "The external Transaction ID/Payment ID within this order's payment provider (if a payment provider was used).",
      "example": null,
      "type": "string"
    },
    "payment_status": {
      "description": "A read-only value. Do not attempt to set or modify this value in a POST or PUT operation.",
      "type": "string"
    },
    "refunded_amount": {
      "description": "The amount refunded from this transaction. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "order_is_digital": {
      "description": "Whether this is an order for digital products.",
      "example": false,
      "type": "boolean"
    },
    "store_credit_amount": {
      "description": "Represents the store credit that the shopper has redeemed on this individual order. This is a read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "gift_certificate_amount": {
      "description": "A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "ip_address": {
      "description": "IP Address of the customer, if known.",
      "example": "12.345.678.910",
      "type": "string"
    },
    "geoip_country": {
      "description": "The full name of the country where the customer made the purchase, based on the IP.",
      "example": "United States",
      "type": "string"
    },
    "geoip_country_iso2": {
      "description": "The country where the customer made the purchase, in ISO2 format, based on the IP.",
      "example": "US",
      "type": "string"
    },
    "currency_id": {
      "description": "The ID of the currency being used in this transaction. A read-only value. Do not pass in a POST or PUT.",
      "example": 1,
      "type": "integer"
    },
    "currency_code": {
      "description": "The currency code of the currency being used in this transaction. A read-only value. Do not pass in a POST or PUT.",
      "example": "USD",
      "type": "string"
    },
    "currency_exchange_rate": {
      "description": "A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)",
      "example": "1.0000000000",
      "type": "string"
    },
    "default_currency_id": {
      "description": "A read-only value. Do not pass in a POST or PUT.",
      "example": 1,
      "type": "integer"
    },
    "default_currency_code": {
      "description": "The currency code of the default currency for this type of transaction. A read-only value. Do not pass in a POST or PUT.",
      "type": "string",
      "example": "USD"
    },
    "staff_notes": {
      "description": "Any additional notes for staff.",
      "example": "Send Saturday",
      "type": "string"
    },
    "customer_message": {
      "description": "Message that the customer entered (number, optiona) -o the `Order Comments` box during checkout.",
      "example": "Thank you",
      "type": "string"
    },
    "discount_amount": {
      "description": "Amount of discount for this transaction. (Float, Float-As-String, Integer)",
      "example": "0.0000",
      "type": "string"
    },
    "coupon_discount": {
      "description": "A read-only value. Do not pass in a POST or PUT. (Float, Float-As-String, Integer)",
      "example": "5.0000",
      "type": "string"
    },
    "shipping_address_count": {
      "type": "number",
      "description": "The number of shipping addresses associated with this transaction. A read-only value. Do not pass in a POST or PUT."
    },
    "is_deleted": {
      "description": "Indicates whether the order was deleted (archived). Set to to true, to archive an order.",
      "example": false,
      "type": "boolean"
    },
    "is_email_opt_in": {
      "description": "Indicates whether the shopper has selected an opt-in check box (on the checkout page) to receive emails. A read-only value. Do not pass in a POST or PUT.",
      "example": false,
      "type": "boolean"
    },
    "credit_card_type": {
      "type": "number"
    },
    "ebay_order_id": {
      "description": "If the order was placed through eBay, the eBay order number will be included. Otherwise, the value will be `0`.",
      "example": "0",
      "type": "string"
    },
    "billing_address": {
      "title": "Billing Address",
      "type": "object",
      "description": "Required to create an order.",
      "properties": {
        "first_name": {
          "description": "",
          "example": "Jane",
          "type": "string"
        },
        "last_name": {
          "description": "",
          "example": "Doe",
          "type": "string"
        },
        "company": {
          "description": "",
          "type": "string"
        },
        "street_1": {
          "description": "",
          "example": "123 Main Street",
          "type": "string"
        },
        "street_2": {
          "description": "",
          "type": "string"
        },
        "city": {
          "description": "",
          "example": "Austin",
          "type": "string"
        },
        "state": {
          "description": "",
          "example": "TX",
          "type": "string"
        },
        "zip": {
          "description": "",
          "example": "12345",
          "type": "string"
        },
        "country": {
          "description": "",
          "example": "United States",
          "type": "string"
        },
        "country_iso2": {
          "description": "",
          "example": "US",
          "type": "string"
        },
        "phone": {
          "description": "",
          "type": "string"
        },
        "email": {
          "description": "",
          "example": "janedoe@email.com",
          "type": "string"
        },
        "form_fields": {
          "description": "",
          "type": "array",
          "items": {
            "title": "Form Fields",
            "type": "object",
            "readOnly": true,
            "description": "Read-Only. If you have required address form fields they will need to be set as optional before creating an order via API.",
            "properties": {
              "name": {
                "description": "Name of the form field",
                "readOnly": true,
                "type": "string",
                "example": "License Id"
              },
              "value": {
                "description": "Value of the form field",
                "readOnly": true,
                "type": "string",
                "example": "123BAF"
              }
            }
          }
        }
      }
    },
    "order_source": {
      "description": "Orders submitted via the store's website will include a `www` value. Orders submitted via the API will be set to `external`. A read-only value. Do not pass in a POST or PUT.",
      "example": "www",
      "type": "string"
    },
    "external_source": {
      "description": "For orders submitted or modified via the API, using a PUT or POST operation, you can optionally pass in a value identifying the system used to generate the order. For example: `POS`. Otherwise, the value will be null.",
      "example": "null",
      "type": "string"
    },
    "products": {
      "title": "Products Resource",
      "type": "object",
      "readOnly": true,
      "properties": {
        "url": {
          "description": "",
          "readOnly": true,
          "example": "https://api.bigcommerce.com/stores/{store_hash}/v2/orders/129/products",
          "type": "string"
        },
        "resource": {
          "description": "",
          "readOnly": true,
          "example": "/orders/129/products",
          "type": "string"
        }
      }
    },
    "shipping_addresses": {
      "title": "Shipping Address Resource",
      "type": "object",
      "readOnly": true,
      "properties": {
        "url": {
          "description": "URL of the shipping address for api requests",
          "readOnly": true,
          "example": "https://api.bigcommerce.com/stores/{store_hash}/v2/orders/129/shippingaddresses",
          "type": "string"
        },
        "resource": {
          "description": "",
          "readOnly": true,
          "example": "/orders/129/shippingaddresses",
          "type": "string"
        }
      }
    },
    "coupons": {
      "title": "Coupon Resource",
      "type": "object",
      "readOnly": true,
      "properties": {
        "url": {
          "description": "URL of the coupons for api requests",
          "readOnly": true,
          "example": "https://api.bigcommerce.com/stores/{store_hash}/v2/orders/129/coupons",
          "type": "string"
        },
        "resource": {
          "description": "resource of the coupons",
          "readOnly": true,
          "example": "/orders/129/coupons",
          "type": "string"
        }
      }
    },
    "external_id": {
      "description": "ID of the order in another system. For example, the Amazon Order ID if this is an Amazon order.This field can be updated in a /POST, but using a /PUT to update the order will return a 400 error. The field 'external_id' cannot be written to. Please remove it from your request before trying again. It can not be overwritten once set.",
      "example": "null",
      "type": "string"
    },
    "external_merchant_id": {
      "description": "Id of the external merchant.",
      "example": null,
      "type": "integer"
    },
    "channel_id": {
      "type": "integer",
      "example": 1,
      "description": "Shows where the order originated. The channel_id will default to 1. Read-Only. "
    },
    "tax_provider_id": {
      "type": "string",
      "description": "BasicTaxProvider - Tax is set to manual. \n\nAvaTaxProvider - This is for when the tax provider has been set to automatic and the order was NOT created by the API. Used for Avalara. \n\n\"\" (blank) - When the tax provider is unknown. This includes legacy orders and orders previously created via API.\nThis can be set when creating an order using a POST. \n\n",
      "enum": [
        "BasicTaxProvider",
        "AvaTaxProvider",
        ""
      ]
    }
  }
};

const convertType = (type) => {
  switch(type) {
    case 'integer': return 'Number';
    case 'number' : return 'Number';
    case 'string' : return 'String';
    case 'boolean': return 'Boolean';
    case 'object' : return 'Object';
    default       : return type;
  }
}

const transformKey = (key, type) => {
  const hasStoreId = key.includes('_id');
  const hasDate = key.includes('date');
  const isBoolean = type === 'boolean';
  const isMultiWord = key.includes('_');

  let newKey = key;

  if(isMultiWord) {
    let a = key;
    while(a.includes('_')) {
      const index = a.indexOf('_');
      a = a.slice(0, index) 
        + a.charAt(index+1).toUpperCase()
        + a.slice(index+2, a.length);
    }
    newKey = a;
  }
  
  if(isBoolean) {
    newKey = 'is' + newKey.charAt(0).toUpperCase() + newKey.slice(1);
  } else if(hasStoreId || hasDate) {
    newKey = 'store' + newKey.charAt(0).toUpperCase() + newKey.slice(1);
  }

  return newKey;
}

const processSubArray = (name, item) => {
  const keys = Object.keys(item);
  
  schema += `${name}: [{\n`;
  
  keys.map(key => {
  	const value = item[key];
    const { type } = value;
    const processedKey = transformKey(key, type);

    if(type === 'object') {
      processSubObject(value.properties);
    } else if (type === 'array') {
    	processSubArray(processedKey, value.properties);
    } else {
    	schema += `  ${processedKey}: {\n    trim: true,\n    type: ${convertType(type)},\n  },\n`;
    }
  })
  
  schema += `}],\n`;
}

const processSubObject = (name, item) => {
  const keys = Object.keys(item);
  
  schema += `${name}: {\n`;
  
  keys.map(key => {
  	const value = item[key];
    const { type } = value;
    const processedKey = transformKey(key, type);

    if(type === 'object') {
      processSubObject(processedKey, value.properties);
    } else if (type === 'array') {
    	processSubArray(processedKey, value.items.properties);
    } else {
    	schema += `  ${processedKey}: {\n    trim: true,\n    type: ${convertType(type)},\n  },\n`;
    }
  })
  
  schema += `},\n`;
}

const func = (item) => {
  const keys = Object.keys(item);
  
  keys.forEach(key => {
  	const value = item[key];
    const { type } = value;
    const processedKey = transformKey(key, type);

    if(type === 'object') {
      processSubObject(processedKey, value.properties);
    } else if (type === 'array') {
    	processSubArray(processedKey, value.items.properties);
    } else {
    	schema += `${processedKey}: {\n  trim: true,\n  type: ${convertType(type)},\n},\n`;
    }
  })
}

func(obj.properties);
console.log(schema);

